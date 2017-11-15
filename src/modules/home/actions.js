import { fetchMoviePopular, fetchFixturesList } from '../../../helpers';

export const GET_MOVIES_POPULAR = 'GET_MOVIES_POPULAR';

export const getMoviesPopular = () => {
  data = fetchFixturesList();

  return {
    type: GET_MOVIES_POPULAR,
    payload: data
  };
}