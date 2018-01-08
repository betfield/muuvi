export const ADD_PREDICTION = 'ADD_PREDICTION';
export const REMOVE_PREDICTION = 'REMOVE_PREDICTION';

export const addPrediction = prediction => ({
  type: ADD_PREDICTION,
  prediction
});

export const removePrediction = id => ({
  type: REMOVE_PREDICTION,
  id
});
