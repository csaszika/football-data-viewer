import { createSelector } from '@ngrx/store';

import { NavCardItem } from '../../shared/navigation-cards/interfaces/nav-card-item';
import { Competition } from '../../shell/types/competitions';
import { AppState } from '../index';
import { CompetitionState } from './reducer';

export const selectCompetitionsFeature = (state: AppState): CompetitionState => state.competitions;

export const selectCompetitions = createSelector(selectCompetitionsFeature, (state: CompetitionState): Competition[] => state.competitions);

export const selectCompetitionsForNavCards = createSelector(selectCompetitions, (competitions: Competition[]): NavCardItem[] => {
  return competitions.map((competition: Competition) => {
    return {
      title: competition.name,
      description: competition.area.name,
      url: `${competition.name}`,
    } as NavCardItem;
  });
});

export const selectCompetitionsLoading = createSelector(selectCompetitionsFeature, (state: CompetitionState): boolean => state.loading);

export const selectCompetitionsError = createSelector(selectCompetitionsFeature, (state: CompetitionState): boolean => state.error);
