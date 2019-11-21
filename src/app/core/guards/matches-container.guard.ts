import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { CompetitionId } from '../../shared/types/competitions';
import { AppState } from '../../store';
import { selectCompetitionId } from '../../store/competition/selectors';

@Injectable({
  providedIn: 'root',
})
export class MatchesContainerGuard implements CanActivate {
  private hasSelectedCompetition: boolean;

  constructor(private readonly store: Store<AppState>, private readonly router: Router) {
    store.pipe(select(selectCompetitionId), first()).subscribe((competitionId: CompetitionId) => {
      this.hasSelectedCompetition = !!competitionId;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.hasSelectedCompetition) {
      this.router.navigate(['']);
    }
    return this.hasSelectedCompetition;
  }
}
