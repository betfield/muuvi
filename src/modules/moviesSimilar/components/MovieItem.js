import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles/MovieItem';

const MovieItem = ({ movie, openModalInfo }) => (
  <TouchableWithoutFeedback
    onPress={() => openModalInfo(movie)}
  >
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: `/${movie.poster_path}` }}
      />
    </View>
  </TouchableWithoutFeedback>
);

export default MovieItem;
