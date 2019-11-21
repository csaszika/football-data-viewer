import { createAction, props } from '@ngrx/store';

import { CompetitionId } from '../../shared/types/competitions';
import { CompetitionOfMatch, Match, MatchId } from '../../shared/types/matches';

export const getMatches = createAction('[Matches] Get matches effect', props<{ competitionId: CompetitionId }>());
export const loadMatches = createAction(
  '[Matches] Load matches into store',
  props<{ matches: Match[]; competition: CompetitionOfMatch }>()
);
export const loadMatchesFailed = createAction('[Matches] Load matches failed');

export const selectMatch = createAction('[Matches] Select match', props<{ matchId: MatchId }>());
