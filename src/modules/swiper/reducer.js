import { ADD_MOVIE_TO_LIKED_LIST, REMOVE_MOVIE_FROM_LIST } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_LIKED_LIST:
      return [...state, action.fixture];
    case REMOVE_MOVIE_FROM_LIST:
      return state.filter(fixture => fixture.id !== action.id);
    default:
      return state;
  }
};
