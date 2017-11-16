import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import styles from './styles/ButtonsGroup';

const ButtonsGroup = ({ like, dislike, info }) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={dislike}>
      <View style={[styles.buttons, { borderColor: Colors.redColor }]}>
        <Entypo name="arrow-left" size={50} color={Colors.redColor} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={info}>
      <View style={styles.buttonInfo}>
        <FontAwesome name="info" size={20} color="#fff" />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={like}>
      <View style={[styles.buttons, { borderColor: Colors.blueColor }]}>
        <Entypo name="arrow-right" size={50} color={Colors.blueColor} />
      </View>
    </TouchableOpacity>
  </View>
);

export default ButtonsGroup;
