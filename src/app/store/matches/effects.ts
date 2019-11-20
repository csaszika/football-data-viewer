import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { baseApiUrl } from '../../shared/constants/http.constants';
import { CompetitionId } from '../../shared/types/competitions';
import { MatchesResponse } from '../../shared/types/matches';
import { getMatches, loadMatches, loadMatchesFailed } from './actions';

@Injectable()
export class MatchesEffects {
  // Get only LIVE(IN_PLAY and PAUSED) and SCHEDULED matches, just for reduce data size
  loadMatches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMatches.type),
      switchMap((action: { competitionId: CompetitionId }) => {
        return this.http.get<MatchesResponse>(`${baseApiUrl}/competitions/${action.competitionId}/matches`).pipe(
          map((data: MatchesResponse) => loadMatches({ matches: data.matches, competition: data.competition })),
          catchError(() => of(loadMatchesFailed()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private readonly http: HttpClient) {}
}
