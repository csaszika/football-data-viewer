import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatchId, MatchStatus } from '../../shared/types/matches';
import { AppState } from '../../store';
import { getMatchDetailsById } from '../../store/matches/actions';
import { selectMatchDetailsView, selectMatchesError, selectMatchesLoading } from '../../store/matches/selectors';

export interface MatchDetailsView {
  competitionName: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
  date: string;
  minute: number;
  period: string; // not supported (or I did not find that information in api)
}

@Component({
  selector: 'app-match-details-container',
  templateUrl: './match-details-container.component.html',
  styleUrls: ['./match-details-container.component.scss'],
})
export class MatchDetailsContainerComponent implements OnInit {
  details$: Observable<MatchDetailsView> = this.store.pipe(select(selectMatchDetailsView));
  loading$: Observable<boolean> = this.store.pipe(select(selectMatchesLoading));
  error$: Observable<boolean> = this.store.pipe(select(selectMatchesError));
  constructor(private readonly store: Store<AppState>, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const matchId = this.route.snapshot.params['matchId'] as MatchId;
    this.store.dispatch(getMatchDetailsById({ matchId }));
  }
}
