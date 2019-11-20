import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsContainerComponent } from './competitions-container.component';

describe('LeaguesContainerComponent', () => {
  let component: CompetitionsContainerComponent;
  let fixture: ComponentFixture<CompetitionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionsContainerComponent],
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
