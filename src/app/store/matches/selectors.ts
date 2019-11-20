import { createSelector } from '@ngrx/store';

import { CardListItem } from '../../shared/card-list/interfaces/card-list-item';
import { CompetitionOfMatch, Match, MatchStatus } from '../../shared/types/matches';
import { AppState } from '../index';
import { MatchState } from './reducer';

export const selectCompetitionsFeature = (state: AppState): MatchState => state.matches;

export const selectMatches = createSelector(selectCompetitionsFeature, (state: MatchState): Match[] => state.matches);
export const selectLiveMatches = createSelector(selectCompetitionsFeature, (state: MatchState): Match[] => {
  return state.matches.filter(
    (match: Match) => match.status === MatchStatus.LIVE || match.status === MatchStatus.IN_PLAY || match.status === MatchStatus.PAUSED
  );
});
export const selectMatchesForCards = createSelector(selectMatches, (matches: Match[]): CardListItem[] => {
  return matches.map((match: Match) => {
    return {
      id: match.id,
      title: `${match.homeTeam.name} - ${match.awayTeam.name}`,
      description: match.status,
    };
  });
});

export const selectCompetitionOfMatches = createSelector(
  selectCompetitionsFeature,
  (state: MatchState): CompetitionOfMatch => state.competition
);

export const selectMatchesLoading = createSelector(selectCompetitionsFeature, (state: MatchState): boolean => state.loading);

export const selectMatchesError = createSelector(selectCompetitionsFeature, (state: MatchState): boolean => state.error);
