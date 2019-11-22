import { CompetitionAreaId, CompetitionId } from './competitions';

export type MatchId = number;
export type TeamId = number;

export enum MatchStatus {
  SCHEDULED = 'SCHEDULED',
  LIVE = 'LIVE',
  IN_PLAY = 'IN_PLAY',
  PAUSED = 'PAUSED',
  FINISHED = 'FINISHED',
  POSTPONED = 'POSTPONED',
  SUSPENDED = 'SUSPENDED',
  CANCELED = 'CANCELED',
}

export enum MatchWinner {
  AWAY_TEAM = 'AWAY_TEAM',
  HOME_TEAM = 'HOME_TEAM',
}

export interface CompetitionOfMatch {
  id: CompetitionId;
  area: { id: CompetitionAreaId; name: string };
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

export interface Match {
  id: MatchId;
  season: { id: number; startDate: string; endDate: string; currentMatchday: number };
  utcDate: string;
  status: MatchStatus;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  score: {
    winner: MatchWinner;
    duration: string;
    fullTime: { homeTeam: number; awayTeam: number };
    halfTime: { homeTeam: number; awayTeam: number };
    extraTime: { homeTeam: number; awayTeam: number };
    penalties: { homeTeam: number; awayTeam: number };
  };
  homeTeam: { id: TeamId; name: string };
  awayTeam: { id: TeamId; name: string };
  referees: [
    { id: number; name: string; nationality: string },
    { id: number; name: string; nationality: string },
    { id: number; name: string; nationality: string },
    { id: number; name: string; nationality: string }
  ];
}

export interface MatchDetails extends Match {
  competition: { id: CompetitionId; name: string };
  minute: number; // backend not provide it but example response has it, perhaps comes if status is live
  attendance: number; // backend not provide it but example response has it, perhaps comes if status is live
}

export interface MatchesResponse {
  count: number;
  filters: object;
  competition: CompetitionOfMatch;
  matches: Array<Match>;
}

export interface MatchResponse {
  head2head: {
    numberOfMatches: number;
    totalGoals: number;
    homeTeam: { wins: number; draws: number; losses: number };
    awayTeam: { wins: number; draws: number; losses: number };
  };
  match: MatchDetails;
}
