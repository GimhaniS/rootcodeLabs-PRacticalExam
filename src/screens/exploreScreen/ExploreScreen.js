import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TrackCard } from '../../components';
import { COLORS } from '../../Utils/colors';
import album from '../../assets/album.jpg';
const ExploreScreen = () => {
  return (
    <View styles={styles.exploreWrapper}>
      <TrackCard album={album} trackName=" Hellow" artistName="Adele" collectionName=" Adele 21" />
    </View>
  );
};

export { ExploreScreen };

const styles = StyleSheet.create({
  exploreWrapper: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },
});
