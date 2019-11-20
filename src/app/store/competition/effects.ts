import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';

import { baseApiUrl } from '../../shared/constants/http.constants';
import { CompetitionList } from '../../shell/types/competitions';
import { getCompetitions, loadCompetitions, loadCompetitionsFailed } from './actions';

@Injectable()
export class CompetitionsEffects {
  loadCompetitions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompetitions.type),
      switchMap(() =>
        this.http.get<CompetitionList>(`${baseApiUrl}/competitions`).pipe(
          map((data: CompetitionList) => loadCompetitions({ competitions: data.competitions })),
          catchError(() => of(loadCompetitionsFailed()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private readonly http: HttpClient) {}
}
