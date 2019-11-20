import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionsContainerComponent } from './shell/competitions-container/competitions-container.component';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
