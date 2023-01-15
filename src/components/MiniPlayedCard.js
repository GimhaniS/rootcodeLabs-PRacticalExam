import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
const windowWidth = Dimensions.get('window').width;
const MiniPlayedCard = ({ songName, album }) => {
  return (
    <View style={styles.headerHome}>
      <View style={styles.imagewrapper}>
        <Image
          source={{
            uri: album ? album?.toString() : '',
          }}
          style={styles.albumView}
          resizeMethod="resize"
          imageStyle={{ opacity: 0.5 }}
          blurRadius={1}
        />
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumView: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    zIndex: 5,
  },
  imagewrapper: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    backgroundColor: 'red',
    zIndex: 9,
  },
  textView: {
    position: 'absolute',
    maxHeight: windowWidth / 4,
    maxWidth: windowWidth / 4,
    zIndex: 99,
  },
  song: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
});
