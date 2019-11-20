import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionsContainerComponent } from './containers/competitions-container/competitions-container.component';
import { MatchesContainerComponent } from './containers/matches-container/matches-container.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsContainerComponent,
  },
  {
    path: ':competitionName',
    component: MatchesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
