import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { initialState } from '../../store/matches/reducer';
import { MatchDetailsContainerComponent } from './match-details-container.component';

describe('MatchDetailsContainerComponent', () => {
  let component: MatchDetailsContainerComponent;
  let fixture: ComponentFixture<MatchDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MatchDetailsContainerComponent],
      providers: [provideMockStore({ initialState: { matches: initialState() } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
