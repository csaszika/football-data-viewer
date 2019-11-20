import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { Competition } from '../../shell/types/competitions';
import * as CompetitionActions from './actions';

export interface CompetitionState {
  competitions: Array<Competition>;
  loading: boolean;
  error: boolean;
}

export const initialState = (): CompetitionState => {
  return {
    competitions: [],
    loading: false,
    error: false,
  };
};

const songsReducer = createReducer(
  initialState(),
  on(CompetitionActions.getCompetitions, (state: CompetitionState) => ({ ...state, loading: true, error: false })),
  on(CompetitionActions.loadCompetitions, (state: CompetitionState, { competitions }) => ({
    ...state,
    loading: false,
    competitions: [...competitions],
  })),
  on(CompetitionActions.loadCompetitionsFailed, (state: CompetitionState) => ({ ...state, loading: false, error: true }))
);

// tslint:disable-next-line:only-arrow-functions
export function reducer(state: CompetitionState, action: Action): CompetitionState {
  return songsReducer(state, action);
}
