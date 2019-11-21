import { createSelector } from '@ngrx/store';

import { Competition, CompetitionId } from '../../shared/types/competitions';
import { AppState } from '../index';
import { CompetitionState } from './reducer';

export const selectCompetitionsFeature = (state: AppState): CompetitionState => state.competitions;

export const selectCompetitions = createSelector(selectCompetitionsFeature, (state: CompetitionState): Competition[] => state.competitions);

export const selectCompetitionsLoading = createSelector(selectCompetitionsFeature, (state: CompetitionState): boolean => state.loading);

export const selectCompetitionsError = createSelector(selectCompetitionsFeature, (state: CompetitionState): boolean => state.error);

export const selectCompetitionId = createSelector(
  selectCompetitionsFeature,
  (state: CompetitionState): CompetitionId => state.selectedCompetitionId
);
