import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { CardListComponent } from './navigation-cards/card-list.component';

@NgModule({
  declarations: [CardListComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: [CardListComponent],
})
export class CardListModule {}
