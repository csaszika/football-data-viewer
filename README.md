# FootballDataViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

Guide:

There are 3 pages in this app. The competitions, matches and match details page.

Note: I have resource access for UEFA Champions League competition, other competition returns with 403 Forbidden.

I used NgRX for state management, it was not necessary but this solution is cleaner in my opinion and easy to maintain.

Because of app size, I did not use lazy loaded modules. If I think about a product this app would be a lazy loaded football-feature module.

Testing:

There was nothing about testing requirements in the homework description, but I would like to show my testing culture what you can find
here:

1. containers/competition-container/competitions-container.component.spec.ts
2. store/competitions/reducer.spec.ts

Extra tasks:

Those features require websocket, but I did not find any information about websocket opportunities in football-data api documentation.

Questions:

If you have any questions about the project then ping me.
