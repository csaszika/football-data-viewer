import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { NavigationCardsComponent } from '../../shared/navigation-cards/navigation-cards/navigation-cards.component';
import { initialState } from '../../store/competition/reducer';
import { CompetitionsContainerComponent } from './competitions-container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LeaguesContainerComponent', () => {
  let component: CompetitionsContainerComponent;
  let fixture: ComponentFixture<CompetitionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [CompetitionsContainerComponent, MockComponent(NavigationCardsComponent)],
      providers: [provideMockStore({ initialState: { competitions: initialState() } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
