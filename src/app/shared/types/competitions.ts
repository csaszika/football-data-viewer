export type CompetitionId = number;
export type CompetitionAreaId = number;

export interface Competition {
  id: CompetitionId;
  area: { id: CompetitionAreaId; name: string };
  name: string;
  code: string;
  emblemUrl: string;
  plan: string;
  currentSeason: { id: number; startDate: string; endDate: string; currentMatchday: number; winner: any };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

export interface CompetitionList {
  count: number;
  filters: object;
  competitions: Array<Competition>;
}
