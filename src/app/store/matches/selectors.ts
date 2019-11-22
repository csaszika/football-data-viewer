import { createSelector } from '@ngrx/store';

import { MatchDetailsView } from '../../containers/match-details-container/match-details-container.component';
import { CompetitionOfMatch, Match, MatchDetails, MatchId } from '../../shared/types/matches';
import { getAwayScore, getHomeScore } from '../../shared/util/match-details.util';
import { AppState } from '../index';
import { MatchState } from './reducer';

export const selectMatchesFeature = (state: AppState): MatchState => state.matches;

export const selectMatches = createSelector(selectMatchesFeature, (state: MatchState): Match[] => state.matches);

export const selectCompetitionOfMatches = createSelector(
  selectMatchesFeature,
  (state: MatchState): CompetitionOfMatch => state.competition
);

export const selectMatchesLoading = createSelector(selectMatchesFeature, (state: MatchState): boolean => state.loading);

export const selectMatchesError = createSelector(selectMatchesFeature, (state: MatchState): boolean => state.error);

export const selectMatchId = createSelector(selectMatchesFeature, (state: MatchState): MatchId => state.selectedMatchId);

export const selectMatchDetails = createSelector(selectMatchesFeature, (state: MatchState): MatchDetails => state.selectedMatchDetails);

export const selectMatchDetailsView = createSelector(
  selectMatchDetails,
  (matchDetails: MatchDetails): MatchDetailsView => {
    // to prevent error if data not ready
    // other option avoid using nested object in store so we can map the values in effect
    if (!matchDetails) {
      return undefined;
    }
    return {
      competitionName: matchDetails.competition.name,
      homeTeam: matchDetails.homeTeam.name,
      awayTeam: matchDetails.awayTeam.name,
      homeScore: getHomeScore(matchDetails),
      awayScore: getAwayScore(matchDetails),
      status: matchDetails.status,
      period: '',
      minute: matchDetails.minute,
      date: matchDetails.utcDate,
    };
  }
);
