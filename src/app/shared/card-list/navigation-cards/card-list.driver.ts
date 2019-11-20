import { ComponentDriver } from 'angular-unit-component-driver';

import { CardListComponent } from './card-list.component';

export class NavigationCardsComponentDriver extends ComponentDriver<CardListComponent> {
  get firstPlanCard(): HTMLElement {
    return this.querySelector('mat-card');
  }
}
