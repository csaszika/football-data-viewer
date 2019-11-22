import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { AppState } from '../../store';
import { getCompetitions, selectCompetition } from '../../store/competition/actions';
import { initialState } from '../../store/competition/reducer';
import { competitionsData } from '../../test-data/mock';
import { CompetitionsContainerComponent } from './competitions-container.component';

describe('CompetitionsContainerComponent', () => {
  let component: CompetitionsContainerComponent;
  let fixture: ComponentFixture<CompetitionsContainerComponent>;
  let store: MockStore<AppState>;
  let storeDispatchSpy;
  const router = {
    navigate: jasmine.createSpy('navigate'),
  };

  Given(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, RouterTestingModule],
        declarations: [CompetitionsContainerComponent, MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
        providers: [provideMockStore({ initialState: { competitions: initialState() } }), { provide: Router, useValue: router }],
      }).compileComponents();

      store = TestBed.get<Store<AppState>>(Store);
      storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    })
  );

  Given(() => {
    fixture = TestBed.createComponent(CompetitionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  Then('should create', () => {
    expect(component).toBeTruthy();
  });

  Then('should trigger to get competitions', () => {
    expect(storeDispatchSpy).toHaveBeenCalledWith(getCompetitions());
  });

  describe('Initialization', () => {
    describe('with competition', () => {
      Given(() => {
        store.setState({
          matches: undefined,
          competitions: {
            competitions: [competitionsData.competitions[0]],
            error: false,
            loading: false,
            selectedCompetitionId: undefined,
          },
        });
      });

      When(() => {
        fixture.detectChanges();
      });

      Then('should have a card with competition data', () => {
        const cards = fixture.debugElement.queryAll(By.css('mat-card'));
        const cardTitle = cards[0].query(By.css('mat-card-title'));
        expect(cards.length).toEqual(1);
        expect(cardTitle.nativeElement.textContent).toEqual(competitionsData.competitions[0].name);
      });
    });

    describe('with loading', () => {
      Given(() => {
        store.setState({
          matches: undefined,
          competitions: {
            competitions: undefined,
            error: false,
            loading: true,
            selectedCompetitionId: undefined,
          },
        });
      });

      When(() => {
        fixture.detectChanges();
      });

      Then('should have a card with competition data', () => {
        const cards = fixture.debugElement.queryAll(By.css('mat-card'));
        const loadingDiv = fixture.debugElement.query(By.css('div'));
        expect(cards.length).toEqual(0);
        expect(loadingDiv.nativeElement.textContent).toContain('Loading...');
      });
    });

    describe('with error', () => {
      Given(() => {
        store.setState({
          matches: undefined,
          competitions: {
            competitions: undefined,
            error: true,
            loading: false,
            selectedCompetitionId: undefined,
          },
        });
      });

      When(() => {
        fixture.detectChanges();
      });

      Then('should have a card with competition data', () => {
        const cards = fixture.debugElement.queryAll(By.css('mat-card'));
        const errorDiv = fixture.debugElement.query(By.css('div'));
        expect(cards.length).toEqual(0);
        expect(errorDiv.nativeElement.textContent).toContain('Something went wrong');
      });
    });
  });

  describe('Events', () => {
    Given(() => {
      store.setState({
        matches: undefined,
        competitions: {
          competitions: [competitionsData.competitions[0]],
          error: false,
          loading: false,
          selectedCompetitionId: undefined,
        },
      });
    });

    When(() => {
      fixture.detectChanges();
    });

    Then('should select competition on click', () => {
      const card = fixture.debugElement.queryAll(By.css('mat-card'))[0];
      card.nativeElement.click();
      expect(storeDispatchSpy).toHaveBeenCalledWith(selectCompetition({ competitionId: competitionsData.competitions[0].id }));
    });

    Then('should navigate to matches page on click', () => {
      const card = fixture.debugElement.queryAll(By.css('mat-card'))[0];
      card.nativeElement.click();
      expect(router.navigate).toHaveBeenCalledWith([competitionsData.competitions[0].name]);
    });
  });
});
