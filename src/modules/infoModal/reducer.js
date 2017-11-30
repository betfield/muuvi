import { GET_FIXTURE_DETAILS } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  error: null,
  odds: null,
  head2head: null,
  form: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_FIXTURE_DETAILS}_PENDING`:
      return INITIAL_STATE;
    case `${GET_FIXTURE_DETAILS}_FULFILLED`:
      return { ...state,
        isFetched: true,
        odds: action.payload.odds,
        head2head: action.payload.head2head,
        form: action.payload.form,
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
