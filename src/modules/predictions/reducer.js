import { GET_SEASON_MATCHDAYS } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  error: null,
  matchdays: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_SEASON_MATCHDAYS}_PENDING`:
      return INITIAL_STATE;
    case `${GET_SEASON_MATCHDAYS}_FULFILLED`:
      return { ...state,
        isFetched: true,
        matchdays: action.payload.seasonMatchdays
      };
    case `${GET_SEASON_MATCHDAYS}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload.seasonMatchdays
      };
    default:
      return state;
  }
};
