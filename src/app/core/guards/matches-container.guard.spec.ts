import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MatchesContainerGuard } from './matches-container.guard';

describe('MatchesContainerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MatchesContainerGuard, provideMockStore({ initialState: { competitions: {} } })],
    });
  });

  it('should be created', inject([MatchesContainerGuard], (guard: MatchesContainerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
