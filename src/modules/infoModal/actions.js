import { fetchFixtureDetails } from '../../../api';

export const GET_FIXTURE_DETAILS = 'GET_FIXTURE_DETAILS';

export const getFixtureDetails = (fixture, bookieId) => {
  data = fetchFixtureDetails(fixture, bookieId);
  
  return {
    type: GET_FIXTURE_DETAILS,
    payload: data
  };
};
