import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { cardListAnimation } from '../../shared/animations/card-list.animations';
import { CardListItem } from '../../shared/card-list/interfaces/card-list-item';
import { CompetitionId } from '../../shared/types/competitions';
import { CompetitionOfMatch, Match } from '../../shared/types/matches';
import { AppState } from '../../store';
import { selectCompetitionId } from '../../store/competition/selectors';
import { getMatches } from '../../store/matches/actions';
import { selectCompetitionOfMatches, selectMatchesError, selectMatchesForCards, selectMatchesLoading } from '../../store/matches/selectors';

@Component({
  selector: 'app-matches-container',
  templateUrl: './matches-container.component.html',
  styleUrls: ['./matches-container.component.scss'],
  animations: [cardListAnimation],
})
export class MatchesContainerComponent implements OnInit {
  private selectedCompetitionId: CompetitionId;

  matches$: Observable<CardListItem[]> = this.store.pipe(select(selectMatchesForCards));
  competition$: Observable<CompetitionOfMatch> = this.store.pipe(select(selectCompetitionOfMatches));
  loading$: Observable<boolean> = this.store.pipe(select(selectMatchesLoading));
  error$: Observable<boolean> = this.store.pipe(select(selectMatchesError));

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectCompetitionId), first())
      .subscribe((competitionId: CompetitionId) => (this.selectedCompetitionId = competitionId));

    this.store.dispatch(getMatches({ competitionId: this.selectedCompetitionId }));
  }
}
