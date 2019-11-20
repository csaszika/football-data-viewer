import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { cardListAnimation } from '../../shared/animations/card-list.animations';
import { CardListItem } from '../../shared/card-list/interfaces/card-list-item';
import { AppState } from '../../store';
import { getCompetitions, selectCompetition } from '../../store/competition/actions';
import { selectCompetitionsError, selectCompetitionsForNavCards, selectCompetitionsLoading } from '../../store/competition/selectors';

@Component({
  selector: 'app-leagues-container',
  templateUrl: './competitions-container.component.html',
  styleUrls: ['./competitions-container.component.scss'],
  animations: [cardListAnimation],
})
export class CompetitionsContainerComponent implements OnInit {
  competitions$: Observable<CardListItem[]> = this.store.pipe(select(selectCompetitionsForNavCards));
  loading$: Observable<boolean> = this.store.pipe(select(selectCompetitionsLoading));
  error$: Observable<boolean> = this.store.pipe(select(selectCompetitionsError));

  constructor(private readonly store: Store<AppState>, private readonly router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(getCompetitions());
  }

  navigateToMatches(item: CardListItem): void {
    this.store.dispatch(selectCompetition({ competitionId: item.id }));
    this.router.navigate([`${item.title}`]);
  }
}
