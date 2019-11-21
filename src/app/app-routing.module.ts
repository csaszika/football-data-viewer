import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionsContainerComponent } from './containers/competitions-container/competitions-container.component';
import { MatchesContainerComponent } from './containers/matches-container/matches-container.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
