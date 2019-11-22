import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { initialState } from '../../store/matches/reducer';
import { MatchesContainerComponent } from './matches-container.component';

describe('MatchesContainerComponent', () => {
  let component: MatchesContainerComponent;
  let fixture: ComponentFixture<MatchesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [MatchesContainerComponent, MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
      providers: [provideMockStore({ initialState: { matches: initialState(), competitions: { selectedCompetition: { id: 1 } } } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
