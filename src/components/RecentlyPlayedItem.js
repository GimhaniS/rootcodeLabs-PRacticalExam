import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';
import React from 'react';
import album from '../assets/album.jpg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { COLORS } from '../Utils/colors';
const RecentlyPlayedItem = ({ songName, artist, album }) => {
  return (
    <View style={styles.headerHome}>
      <Image
        source={{
          uri: album ? album?.toString() : '',
        }}
        style={styles.albumView}
        resizeMethod="resize"
      />
      <View style={styles.textView}>
        <Text style={styles.song}>{songName}</Text>
        <Text style={styles.name}>{artist}</Text>
      </View>
    </View>
  );
};

export { RecentlyPlayedItem };

const styles = StyleSheet.create({
  headerHome: {
    marginTop: 20,
  },
  albumView: {
    width: windowWidth,
    height: windowWidth,
  },
  textView: {
    position: 'absolute',
    marginLeft: 15,
  },
  song: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 600,
    marginTop: 3,
    marginBottom: 20,
    marginRight: 15,
  },
});
