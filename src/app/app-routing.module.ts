import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionsContainerComponent } from './containers/competitions-container/competitions-container.component';
import { MatchDetailsContainerComponent } from './containers/match-details-container/match-details-container.component';
import { MatchesContainerComponent } from './containers/matches-container/matches-container.component';
import { MatchDetailsContainerGuard } from './core/guards/match-details-container.guard';
import { MatchesContainerGuard } from './core/guards/matches-container.guard';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsContainerComponent,
  },
  {
    path: ':competitionName',
    component: MatchesContainerComponent,
    canActivate: [MatchesContainerGuard],
  },
  {
    path: ':competitionName/:matchId',
    component: MatchDetailsContainerComponent,
    canActivate: [MatchDetailsContainerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
