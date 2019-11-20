import { Component } from '@angular/core';

import { NavCardItem } from '../../shared/navigation-cards/interfaces/nav-card-item';
import { Competition } from '../types/competitions';
import { leagues } from './mock';

@Component({
  selector: 'app-leagues-container',
  templateUrl: './competitions-container.component.html',
  styleUrls: ['./competitions-container.component.scss'],
})
export class CompetitionsContainerComponent {
  // todo replace with real data
  competitions$: NavCardItem[] = [...leagues.competitions].map((competition: Competition) => {
    return {
      title: competition.name,
      description: competition.area.name,
      url: `${competition.name}`,
    } as NavCardItem;
  });
}
