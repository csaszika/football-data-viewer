import { createAction, props } from '@ngrx/store';

import { CompetitionId } from '../../shared/types/competitions';
import { CompetitionOfMatch, Match, MatchDetails, MatchId } from '../../shared/types/matches';

export const getMatches = createAction('[Matches] Get matches effect', props<{ competitionId: CompetitionId }>());
export const loadMatches = createAction(
  '[Matches] Load matches into store',
  props<{ matches: Match[]; competition: CompetitionOfMatch }>()
);
export const loadMatchesFailed = createAction('[Matches] Load matches failed');

export const selectMatch = createAction('[Matches] Select match', props<{ matchId: MatchId }>());

export const getMatchDetailsById = createAction('[Matches] Get match by id effect', props<{ matchId: MatchId }>());
export const loadMatchDetails = createAction('[Matches] Load match into store', props<{ match: MatchDetails }>());
export const loadMatchDetailsFailed = createAction('[Matches] Load match failed');
