import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';

import { NavigationCardsComponent } from './navigation-cards.component';
import { NavigationCardsComponentDriver } from './navigation-cards.driver';

const componentSetup = (): NavigationCardsComponentDriver => {
  return componentTestingSetup({
    componentClass: NavigationCardsComponent,
    driver: NavigationCardsComponentDriver,
    imports: [RouterTestingModule],
    declarations: [MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
  });
};

describe('NavigationCardsComponent', () => {
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
          url: 'Competition 1',
        },
        {
          title: 'Competition 1',
          description: 'area 2',
          url: 'Competition 1',
        },
      ];
      driver.detectChanges();
    });

    Then('should create', () => {
      expect(driver.componentInstance).toBeTruthy();
    });

    Then('could navigate to route', () => {
      expect(driver.firstPlanCard.getAttribute('ng-reflect-router-link')).toEqual('Competition 1');
    });
  });
});
