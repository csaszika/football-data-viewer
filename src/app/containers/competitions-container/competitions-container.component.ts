import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { cardListAnimation } from '../../shared/animations/card-list.animations';
import { NavCardItem } from '../../shared/navigation-cards/interfaces/nav-card-item';
import { AppState } from '../../store';
import { getCompetitions } from '../../store/competition/actions';
import { selectCompetitionsError, selectCompetitionsForNavCards, selectCompetitionsLoading } from '../../store/competition/selectors';

@Component({
  selector: 'app-leagues-container',
  templateUrl: './competitions-container.component.html',
  styleUrls: ['./competitions-container.component.scss'],
  animations: [cardListAnimation],
})
export class CompetitionsContainerComponent implements OnInit {
  competitions$: Observable<NavCardItem[]> = this.store.pipe(select(selectCompetitionsForNavCards));
  loading$: Observable<boolean> = this.store.pipe(select(selectCompetitionsLoading));
  error$: Observable<boolean> = this.store.pipe(select(selectCompetitionsError));

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getCompetitions());
  }
}
