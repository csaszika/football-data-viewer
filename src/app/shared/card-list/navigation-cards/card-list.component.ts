import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CardListItem } from '../interfaces/card-list-item';

@Component({
  selector: 'app-navigation-cards',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() navCardItems: Array<CardListItem> = [];
  @Output() onCardClick: EventEmitter<CardListItem> = new EventEmitter<CardListItem>();
}
