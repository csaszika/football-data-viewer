import { Action, createReducer, on } from '@ngrx/store';

import { CompetitionOfMatch, Match } from '../../shared/types/matches';
import * as MatchesActions from './actions';

/**
 * competition: redundant data, because we have it in #CompetitionState, but easier to handle it here
 * (and futureproof if this will be in another module)
 */
export interface MatchState {
  matches: Array<Match>;
  competition: CompetitionOfMatch;
  loading: boolean;
  error: boolean;
}

export const initialState = (): MatchState => {
  return {
    matches: [],
    competition: undefined,
    loading: false,
    error: false,
  };
};

const matchesReducer = createReducer(
  initialState(),
  on(MatchesActions.getMatches, (state: MatchState) => ({ ...state, loading: true, error: false })),
  on(MatchesActions.loadMatches, (state: MatchState, { matches, competition }) => ({
    ...state,
    loading: false,
    matches: [...matches],
    competition,
  })),
  on(MatchesActions.loadMatchesFailed, (state: MatchState) => ({ ...state, loading: false, error: true }))
);

// tslint:disable-next-line:only-arrow-functions
export function reducer(state: MatchState, action: Action): MatchState {
  return matchesReducer(state, action);
}
