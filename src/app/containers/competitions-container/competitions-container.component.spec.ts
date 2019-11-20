import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { CardListComponent } from '../../shared/card-list/navigation-cards/card-list.component';
import { initialState } from '../../store/competition/reducer';
import { CompetitionsContainerComponent } from './competitions-container.component';

describe('LeaguesContainerComponent', () => {
  let component: CompetitionsContainerComponent;
  let fixture: ComponentFixture<CompetitionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [CompetitionsContainerComponent, MockComponent(CardListComponent)],
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
