import { fetchSeasonMatchdays } from '../../../api';

export const GET_SEASON_MATCHDAYS = 'GET_SEASON_MATCHDAYS';

export const getMatchdays = () => {
  
  matchdays = fetchSeasonMatchdays();

  return {
    type: GET_SEASON_MATCHDAYS,
    payload: matchdays
  };
}