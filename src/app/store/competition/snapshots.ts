import { getCompetitions, loadCompetitions, loadCompetitionsFailed } from './actions';
import { CompetitionState } from './reducer';

const getCompetitionsActionSnapshot: CompetitionState = {
  competitions: [],
  loading: true,
  error: false,
  selectedCompetitionId: undefined,
};

const loadCompetitionsFailedActionSnapshot: CompetitionState = {
  competitions: [],
  loading: false,
  error: true,
  selectedCompetitionId: undefined,
};

const loadCompetitionsActionSnapshot: CompetitionState = {
  competitions: [
    {
      id: 2006,
      area: { id: 2001, name: 'Africa' },
      name: 'WC Qualification',
      code: null,
      emblemUrl: null,
      plan: 'TIER_FOUR',
      currentSeason: { id: 7, startDate: '2015-10-07', endDate: '2017-11-14', currentMatchday: 6, winner: null },
      numberOfAvailableSeasons: 1,
      lastUpdated: '2018-06-04T23:54:04Z',
    },
    {
      id: 2023,
      area: { id: 2011, name: 'Argentina' },
      name: 'Primera B Nacional',
      code: null,
      emblemUrl: null,
      plan: 'TIER_FOUR',
      currentSeason: { id: 547, startDate: '2019-08-16', endDate: '2020-06-14', currentMatchday: 13, winner: null },
      numberOfAvailableSeasons: 3,
      lastUpdated: '2019-11-19T20:05:23Z',
    },
    {
      id: 2024,
      area: { id: 2011, name: 'Argentina' },
      name: 'Superliga Argentina',
      code: 'ASL',
      emblemUrl: null,
      plan: 'TIER_TWO',
      currentSeason: { id: 539, startDate: '2019-07-27', endDate: '2020-03-01', currentMatchday: 14, winner: null },
      numberOfAvailableSeasons: 3,
      lastUpdated: '2019-11-11T21:55:01Z',
    },
  ],
  loading: false,
  error: false,
  selectedCompetitionId: undefined,
};

export const snapshotMap: Map<string, CompetitionState> = new Map<string, CompetitionState>()
  .set(getCompetitions.type, getCompetitionsActionSnapshot)
  .set(loadCompetitionsFailed.type, loadCompetitionsFailedActionSnapshot)
  .set(loadCompetitions.type, loadCompetitionsActionSnapshot);
