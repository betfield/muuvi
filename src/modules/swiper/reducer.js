import { ADD_PREDICTION, REMOVE_PREDICTION } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PREDICTION:
      return [...state, action.fixture];
    case REMOVE_PREDICTION:
      return state.filter(fixture => fixture.id !== action.id);
    default:
      return state;
  }
};
