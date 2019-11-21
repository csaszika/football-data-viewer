import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MatchDetailsContainerGuard } from './match-details-container.guard';

describe('MatchDetailsContainerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MatchDetailsContainerGuard, provideMockStore({ initialState: { matches: {} } })],
    });
  });

  it('should be created', inject([MatchDetailsContainerGuard], (guard: MatchDetailsContainerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
