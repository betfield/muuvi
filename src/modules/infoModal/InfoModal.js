import React from 'react';
import { Platform, Modal, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import MovieMeta from './components/MovieMeta';
import styles from './styles/InfoModal';
import { getHeaderDate, getReferee } from '../../../helpers';

const colors = ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.7)', 'rgba(0,0,0,0.4)'];

const InfoModal = ({ fixture, close, closeModalInfo, visible }) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={Platform.OS === 'android' ? close : null}>
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={close} style={styles.closeButton}>
            <FontAwesome name="close" color="#fff" size={50} />
          </TouchableOpacity>
          <Image
            source={{ uri: fixture.venue.imgUrl }}
            style={styles.poster}
          />
          <LinearGradient colors={colors} style={styles.imagesMeta}>  
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>
                {fixture.venue.name}
              </Text>
            </View>
            <ScrollView contentContainerStyle={styles.overviewContainerScroll}>
              <View style={styles.overviewContainer}>
                <Text style={styles.overviewStyle}>
                  {fixture.homeTeam.name} vs {fixture.awayTeam.name}{"\n"}
                  {getHeaderDate(fixture.date)}{"\n"}
                  {getReferee(fixture.referee)}{"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}
                  Tere{"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}
                  {"\n"}
                </Text>
              </View>
            </ScrollView>
          </LinearGradient>  
        </View>
        <MovieMeta fixture={fixture} closeModalInfo={closeModalInfo} />
      </View>
    </View>
  </Modal>
);

export default InfoModal;