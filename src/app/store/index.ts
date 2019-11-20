import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { CompetitionState, reducer as competitionReducer } from './competition/reducer';

export interface AppState {
  competitions: CompetitionState;
}

export const reducers: ActionReducerMap<AppState> = {
  competitions: competitionReducer,
};
