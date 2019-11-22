# FootballDataViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

##Guide:

There are 3 pages in this app. The competitions, matches and match details page.

URL: https://football-data-dded8.firebaseapp.com/

Note1: I have resource access for UEFA Champions League competition, other competition returns with 403 Forbidden.

Note2: I try to follow business requirements about the url structure, but match/event has not got a name, so I use the id property.
I think in this case, the url is not so nice because we can see: /{competition-name}/{:matchId}

If I can specify the routes then they would be:
/ or /competitions = competition list
/competition/:competitionId = competition details
/competition/:competitionId/matches = match list
/competition/:competitionId/match/:matchId = match details

### Technical staff: 

I used NgRX for state management, it was not necessary but this solution is cleaner in my opinion and easy to maintain.

Because of app size, I did not use lazy loaded modules. If I think about a product this app would be a lazy loaded football-feature module.

Testing:

There was nothing about testing requirements in the homework description, but I would like to show my testing culture what you can find
here:

1. containers/competition-container/competitions-container.component.spec.ts
2. store/competitions/reducer.spec.ts

Extra tasks:

Those features require websocket, but I did not find any information about websocket opportunities in football-data api documentation.

Bugs:

As I said, I have not a big access to resources so please use UEFA Champions League always if you would like to see details.

If you would like to create your own path, you can do that now. I mean /{competition-name} is not checked in match-details page, but the matchId.
For example:
/MyCompetition/:matchId and
/MyComp/:matchId will show you the same match details page.

Questions:

If you have any questions about the project then ping me.
