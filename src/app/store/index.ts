import { ActionReducerMap } from '@ngrx/store';

import { CompetitionState, reducer as competitionsReducer } from './competition/reducer';
import { MatchState, reducer as matchesReducer } from './matches/reducer';

export interface AppState {
  competitions: CompetitionState;
  matches: MatchState;
}

export const reducers: ActionReducerMap<AppState> = {
  competitions: competitionsReducer,
  matches: matchesReducer,
};
