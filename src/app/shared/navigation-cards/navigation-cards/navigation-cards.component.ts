import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavCardItem } from '../interfaces/nav-card-item';

@Component({
  selector: 'app-navigation-cards',
  templateUrl: './navigation-cards.component.html',
  styleUrls: ['./navigation-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCardsComponent {
  @Input() navCardItems: Array<NavCardItem> = [];
}
