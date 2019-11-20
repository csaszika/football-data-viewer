import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';

import { CardListComponent } from './card-list.component';
import { NavigationCardsComponentDriver } from './card-list.driver';

const componentSetup = (): NavigationCardsComponentDriver => {
  return componentTestingSetup({
    componentClass: CardListComponent,
    driver: NavigationCardsComponentDriver,
    imports: [RouterTestingModule],
    declarations: [MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
  });
};

describe('CardListComponent', () => {
  let driver: NavigationCardsComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    Given(() => {
      driver.componentInstance.navCardItems = [
        {
          title: 'Competition 1',
          description: 'area 1',
          id: 1,
        },
        {
          title: 'Competition 1',
          description: 'area 2',
          id: 2,
        },
      ];
      driver.detectChanges();
    });

    Then('should create', () => {
      expect(driver.componentInstance).toBeTruthy();
    });
  });

  describe('Events', () => {
    let spyClick;
    Given(() => {
      driver.componentInstance.navCardItems = [
        {
          title: 'Competition 1',
          description: 'area 1',
          id: 1,
        },
        {
          title: 'Competition 1',
          description: 'area 2',
          id: 2,
        },
      ];
      driver.detectChanges();
      spyClick = spyOn(driver.componentInstance.cardClick, 'emit').and.callThrough();
    });

    When(() => {
      driver.firstPlanCard.click();
    });

    Then('should emit click event', () => {
      expect(spyClick).toHaveBeenCalledWith({
        title: 'Competition 1',
        description: 'area 1',
        id: 1,
      });
    });
  });
});
