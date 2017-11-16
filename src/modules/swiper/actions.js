export const ADD_MOVIE_TO_LIKED_LIST = 'ADD_MOVIE_TO_LIKED_LIST';
export const REMOVE_MOVIE_FROM_LIST = 'REMOVE_MOVIE_FROM_LIST';

export const addMovieToLikedList = fixture => ({
  type: ADD_MOVIE_TO_LIKED_LIST,
  fixture
});

export const removeMovieFromList = id => ({
  type: REMOVE_MOVIE_FROM_LIST,
  id
});
