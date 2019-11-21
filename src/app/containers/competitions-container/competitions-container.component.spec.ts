import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { initialState } from '../../store/competition/reducer';
import { CompetitionsContainerComponent } from './competitions-container.component';

describe('CompetitionsContainerComponent', () => {
  let component: CompetitionsContainerComponent;
  let fixture: ComponentFixture<CompetitionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [CompetitionsContainerComponent, MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
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
