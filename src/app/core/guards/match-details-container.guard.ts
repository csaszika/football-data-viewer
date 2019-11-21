import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { MatchId } from '../../shared/types/matches';
import { AppState } from '../../store';
import { selectMatchId } from '../../store/matches/selectors';

@Injectable({
  providedIn: 'root',
})
export class MatchDetailsContainerGuard implements CanActivate {
  private hasSelectedMatch: boolean;

  constructor(private readonly store: Store<AppState>, private readonly router: Router) {
    store.pipe(select(selectMatchId), first()).subscribe((matchId: MatchId) => {
      this.hasSelectedMatch = !!matchId;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.hasSelectedMatch) {
      this.router.navigate(['/']);
    }
    console.log(this.hasSelectedMatch);
    return this.hasSelectedMatch;
  }
}
