import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
import menu from '../assets/menu.png';
const TrackCard = ({ album, trackName, artistName, collectionName, trackCardhandler }) => {
  return (
    <View style={styles.trackWrapper}>
      <View style={styles.subwrapper}>
        <TouchableOpacity onPress={trackCardhandler} style={styles.subwrapper}>
          <Image
            source={{
              uri: album.toString(),
            }}
            style={styles.thumbnail}
          />
          <View style={styles.txtView}>
            <Text style={styles.songNAme} numberOfLines={1} ellipsizeMode="tail">
              {trackName}
            </Text>
            <View style={styles.row}>
              <Text style={styles.songdes} numberOfLines={1} ellipsizeMode="tail">
                {artistName},
              </Text>
              <Text style={styles.songdes} numberOfLines={2} ellipsizeMode="tail">
                {collectionName}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    width: '96%',
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  subwrapper: {
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    backgroundColor: COLORS.backgroundColor,
    maxWidth: '70%',
    Width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  txtView: {
    // marginLeft: 10,
    maxHeight: 70,
    maxWidth: '70%',
    width: '70%',
    justifyContent: 'flex-start',
  },
  songNAme: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 400,

    // textAlign: 'left',
  },
  songdes: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 400,
    // marginLeft: 10,
  },
  menu: {
    width: 30,
    height: 25,
    marginRight: 5,
  },
});
