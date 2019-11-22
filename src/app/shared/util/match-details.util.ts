import { MatchDetails } from '../types/matches';

export const getHomeScore = (matchDetails: MatchDetails): number => {
  const scores = matchDetails.score;
  if (Number.isInteger(scores.extraTime.homeTeam)) {
    return scores.extraTime.homeTeam;
  }
  if (Number.isInteger(scores.fullTime.homeTeam)) {
    return scores.fullTime.homeTeam;
  }
  if (Number.isInteger(scores.halfTime.homeTeam)) {
    return scores.halfTime.homeTeam;
  }
  return 0;
};
export const getAwayScore = (matchDetails: MatchDetails): number => {
  const scores = matchDetails.score;
  if (Number.isInteger(scores.extraTime.awayTeam)) {
    return scores.extraTime.awayTeam;
  }
  if (Number.isInteger(scores.fullTime.awayTeam)) {
    return scores.fullTime.awayTeam;
  }
  if (Number.isInteger(scores.halfTime.awayTeam)) {
    return scores.halfTime.awayTeam;
  }
  return 0;
};
