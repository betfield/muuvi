import { combineReducers } from 'redux';
import {
  HomeReducer,
  InfoReducer,
  UIReducer,
  PredictionsReducer,
} from '../modules';

export default combineReducers({
  home: HomeReducer,
  infoModal: InfoReducer,
  predictions: PredictionsReducer,
  ui: UIReducer
});
