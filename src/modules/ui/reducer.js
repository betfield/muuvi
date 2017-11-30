import { OPEN_MODAL_INFO, CLOSE_MODAL_INFO } from './actions';

const INITIAL_STATE = {
  modalInfoShow: false,
  modalInfoMovie: {
    homeTeam: {
      name: "",
      logoUrl: ""
    },
    awayTeam: {
      name: "",
      logoUrl: ""
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL_INFO:
      return {
        modalInfoShow: true, //was !state.modalInfoShow
        modalInfoMovie: action.fixture
      };
    case CLOSE_MODAL_INFO:
      return INITIAL_STATE;
    default:
      return state;
  }
};
