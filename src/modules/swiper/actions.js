export const ADD_PREDICTION = 'ADD_PREDICTION';
export const REMOVE_PREDICTION = 'REMOVE_PREDICTION';

export const addPrediction = fixture => ({
  type: ADD_PREDICTION,
  fixture
});

export const removePrediction = id => ({
  type: REMOVE_PREDICTION,
  id
});
