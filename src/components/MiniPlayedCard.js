import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import album from '../assets/album.jpg';
import { COLORS } from '../Utils/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MiniPlayedCard = ({ songName }) => {
  return (
    <View style={styles.headerHome}>
      <Image source={album} style={styles.albumView} resizeMethod="resize" />
      <View style={styles.textView}>
        <Text style={styles.song}>{songName}</Text>
      </View>
    </View>
  );
};

export { MiniPlayedCard };

const styles = StyleSheet.create({
  headerHome: {
    marginTop: 20,
  },
  albumView: {
    width: windowWidth / 4,
    height: windowWidth / 4,
  },
  textView: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: windowWidth / 4,
    maxWidth: windowWidth / 4,
  },
  song: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
});
