import { createAction, props } from '@ngrx/store';

import { Competition } from '../../shell/types/competitions';

export const getCompetitions = createAction('[Competitions] Get competitions effect');
export const loadCompetitions = createAction('[Competitions] Load competitions into store', props<{ competitions: Competition[] }>());
export const loadCompetitionsFailed = createAction('[Competitions] Load competitions failed');
