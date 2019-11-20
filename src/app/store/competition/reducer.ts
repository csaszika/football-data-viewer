import { Action, createReducer, on } from '@ngrx/store';

import { Competition, CompetitionId } from '../../shared/types/competitions';
import * as CompetitionActions from './actions';

export interface CompetitionState {
  competitions: Array<Competition>;
  loading: boolean;
  error: boolean;
  selectedCompetition: CompetitionId;
}

export const initialState = (): CompetitionState => {
  return {
    competitions: [],
    loading: false,
    error: false,
    selectedCompetition: undefined,
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
  on(CompetitionActions.loadCompetitionsFailed, (state: CompetitionState) => ({ ...state, loading: false, error: true })),
  on(CompetitionActions.selectCompetition, (state: CompetitionState, { competitionId }) => ({
    ...state,
    selectedCompetition: competitionId,
  }))
);

// tslint:disable-next-line:only-arrow-functions
export function reducer(state: CompetitionState, action: Action): CompetitionState {
  return songsReducer(state, action);
}
