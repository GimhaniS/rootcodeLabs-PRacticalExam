import { StyleSheet, Text, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../Utils/colors';
import left from '../assets/left.png';
import play from '../assets/play.png';
import album from '../assets/album.jpg';
const windowWidth = Dimensions.get('window').width;
const TrackDetailCard = ({ Genre, Country, album, addToFav }) => {
  return (
    <View style={styles.detailWrapper}>
      <View style={styles.imgwrapper}>
        <Image
          source={{
            uri: album.toString(),
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.colView}>
        <View style={styles.rowView}>
          <View style={styles.genreView}>
            <Text style={styles.titleText}>Genre</Text>
            <Text style={styles.titlewhite}>{Genre}</Text>
          </View>
          <View style={styles.countryView}>
            <Text style={styles.titleText}>Country</Text>
            <Text style={styles.titlewhite}>{Country}</Text>
          </View>
        </View>
        <View style={styles.addtofavView}>
          <TouchableOpacity onPress={addToFav}>
            <View style={styles.addToFvWrapper}>
              <Image source={play} style={styles.playICon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TrackDetailCard;

const styles = StyleSheet.create({
  // singleTrackScreenWrapper: {

  titlewhite: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 500,
  },
  titleText: {
    color: COLORS.backgroundColor,
    fontSize: 12,
    fontWeight: 500,
  },
  playICon: {
    width: 10,
    height: 10,
  },
  lowerView: {
    flex: 2,
    backgroundColor: COLORS.backgroundColor,
  },
  detailWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    Zindex: 99,
    marginTop: 190,
    marginLeft: 25,
    justifyContent: 'space-between',
  },
  imgwrapper: {
    flexDirection: 'column',
  },
  img: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: 10,
    borderWidth: 1,
  },
  colView: {
    flexDirection: 'column',
    marginLeft: 20,
    paddingRight: 20,
  },
  rowView: {
    flexDirection: 'row',
  },
  genreView: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
  },
  countryView: {
    flexDirection: 'column',
    marginLeft: 40,
    marginTop: 10,
  },
  addtofavView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  addToFvWrapper: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.branchColor,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
});
