import { fetchFixturesList } from '../../../api';

export const GET_CURRENT_MATCHDAY_FIXTURES = 'GET_CURRENT_MATCHDAY_FIXTURES';

export const getCurrentMatchdayFixtures = () => {
  data = fetchFixturesList();

  return {
    type: GET_CURRENT_MATCHDAY_FIXTURES,
    payload: data
  };
}