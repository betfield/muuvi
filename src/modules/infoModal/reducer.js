import { GET_FIXTURE_DETAILS } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  error: null,
  odds: null,
  head2head: null,
  standings: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_FIXTURE_DETAILS}_PENDING`:
      return INITIAL_STATE;
    case `${GET_FIXTURE_DETAILS}_FULFILLED`:
      return { ...state,
        isFetched: true,
        odds: action.payload[0],
        head2head: action.payload[1],
        standings: action.payload[2]
      };
    case `${GET_FIXTURE_DETAILS}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};
