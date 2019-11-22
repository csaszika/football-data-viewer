import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { cardListAnimation } from '../../shared/animations/card-list.animations';
import { CompetitionId } from '../../shared/types/competitions';
import { CompetitionOfMatch, Match, MatchStatus } from '../../shared/types/matches';
import { AppState } from '../../store';
import { selectCompetitionId } from '../../store/competition/selectors';
import { getMatches, selectMatch } from '../../store/matches/actions';
import { selectCompetitionOfMatches, selectMatches, selectMatchesError, selectMatchesLoading } from '../../store/matches/selectors';

@Component({
  selector: 'app-matches-container',
  templateUrl: './matches-container.component.html',
  styleUrls: ['./matches-container.component.scss'],
  animations: [cardListAnimation],
})
export class MatchesContainerComponent implements OnInit {
  private selectedCompetitionId: CompetitionId;

  matchStatuses = MatchStatus;

  competition$: Observable<CompetitionOfMatch> = this.store.pipe(select(selectCompetitionOfMatches));
  matches$: Observable<Match[]> = this.store.pipe(select(selectMatches));
  loading$: Observable<boolean> = this.store.pipe(select(selectMatchesLoading));
  error$: Observable<boolean> = this.store.pipe(select(selectMatchesError));

  constructor(private readonly store: Store<AppState>, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectCompetitionId), first())
      .subscribe((competitionId: CompetitionId) => (this.selectedCompetitionId = competitionId));

    this.store.dispatch(getMatches({ competitionId: this.selectedCompetitionId }));
  }

  navigateToMatchDetails(match: Match): void {
    // I use id instead of "event-name" in url, because there is no event-name like property in match object
    this.router.navigate([match.id], { relativeTo: this.activatedRoute });
  }
}
