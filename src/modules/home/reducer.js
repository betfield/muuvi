import { GET_CURRENT_MATCHDAY_FIXTURES } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  error: null,
  fixtures: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_CURRENT_MATCHDAY_FIXTURES}_PENDING`:
      return INITIAL_STATE;
    case `${GET_CURRENT_MATCHDAY_FIXTURES}_FULFILLED`:
      return { ...state,
        isFetched: true,
        fixtures: action.payload.currentMatchdayfixtures
      };
    case `${GET_CURRENT_MATCHDAY_FIXTURES}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};
