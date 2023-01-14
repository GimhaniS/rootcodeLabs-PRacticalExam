import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
import menu from '../assets/menu.png';
const TrackCard = ({ album, trackName, artistName, collectionName }) => {
  return (
    <View style={styles.trackWrapper}>
      <View style={styles.subwrapper}>
        <Image source={album} style={styles.thumbnail} />
        <View style={styles.txtView}>
          <Text style={styles.songNAme}>{trackName}</Text>
          <View style={styles.row}>
            <Text style={styles.songdes}>{artistName}</Text>
            <Text style={styles.songdes}>
              <Text style={styles.songdes}>{artistName}</Text>
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={menu} style={styles.menu} />
      </TouchableOpacity>
    </View>
  );
};

export { TrackCard };

const styles = StyleSheet.create({
  trackWrapper: {
    height: 70,
    maxHeight: 70,
    width: '100%',
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subwrapper: {
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  txtView: {
    marginLeft: 10,
  },
  songNAme: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 500,
  },
  songdes: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 500,
    marginLeft: 10,
  },
  menu: {
    width: 40,
    height: 25,
    marginRight: 5,
  },
});
