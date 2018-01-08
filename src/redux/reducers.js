import { combineReducers } from 'redux';
import {
  HomeReducer,
  InfoReducer,
  UIReducer,
  PredictionsReducer,
  MatchdaysReducer
} from '../modules';

export default combineReducers({
  home: HomeReducer,
  infoModal: InfoReducer,
  predictions: PredictionsReducer,
  matchdays: MatchdaysReducer,
  ui: UIReducer
});
