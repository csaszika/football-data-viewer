import { createSelector } from '@ngrx/store';

import { CardListItem } from '../../shared/card-list/interfaces/card-list-item';
import { Competition, CompetitionId } from '../../shared/types/competitions';
import { AppState } from '../index';
import { CompetitionState } from './reducer';

export const selectCompetitionsFeature = (state: AppState): CompetitionState => state.competitions;

export const selectCompetitions = createSelector(selectCompetitionsFeature, (state: CompetitionState): Competition[] => state.competitions);

export const selectCompetitionsForCards = createSelector(selectCompetitions, (competitions: Competition[]): CardListItem[] => {
  return competitions.map((competition: Competition) => {
    return {
      id: competition.id,
      title: competition.name,
      description: competition.area.name,
    } as CardListItem;
  });
});

export const selectCompetitionsLoading = createSelector(selectCompetitionsFeature, (state: CompetitionState): boolean => state.loading);

export const selectCompetitionsError = createSelector(selectCompetitionsFeature, (state: CompetitionState): boolean => state.error);

export const selectCompetitionId = createSelector(
  selectCompetitionsFeature,
  (state: CompetitionState): CompetitionId => state.selectedCompetition
);
