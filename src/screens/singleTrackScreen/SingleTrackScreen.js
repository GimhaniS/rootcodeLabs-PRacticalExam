import {
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../Utils/colors';
import left from '../../assets/left.png';
import play from '../../assets/play.png';
import album from '../../assets/album.jpg';
import TrackDetailCard from '../../components/TrackDetailCard';
import { addToFavTrackList } from '../../features/Track/trackSlice';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';

const SingleTrackScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const dispatch = useDispatch();
  const backHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    // console.log('item', item);
  }, []);

  const timeFormat = () => {
    return <Moment format="YYYY/MM/DD">{item.releaseDate}</Moment>;
  };

  const addToFav = () => {
    dispatch(addToFavTrackList(item));
    navigation.goBack();
  };
  // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', timeFormat());
  return (
    <View style={styles.singleTrackScreenWrapper}>
      <View style={styles.upperView}>
        <TouchableOpacity onPress={backHandler}>
          <View style={styles.header}>
            <Image source={left} style={styles.leftIcon} />
          </View>
        </TouchableOpacity>
        <Text style={styles.songTitle}> {item.trackName}</Text>
      </View>

      <View style={styles.lowerView}>
        <Text style={styles.detailText}> Artist Name : {item.artistName} </Text>
        <Text style={styles.detailText}> Collection Name : {item.collectionName} </Text>
        <Text style={styles.detailText}> Track Price : USD {item.trackPrice} </Text>
        <Text style={styles.detailText}>Release Date : {item.releaseDate}</Text>
        <Text style={styles.detailText}> Description : {item.artistName} </Text>
      </View>
      <TrackDetailCard
        Genre={item.primaryGenreName}
        Country={item.country}
        album={item.artworkUrl100}
        addToFav={addToFav}
      />
    </View>
  );
};

export { SingleTrackScreen };

const styles = StyleSheet.create({
  singleTrackScreenWrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  upperView: {
    flex: 2,
    backgroundColor: COLORS.branchColor,
    borderBottomRightRadius: 200,
    paddingLeft: 20,
    paddingTop: 20,
  },
  header: {
    width: 25,
    height: 25,
    marginTop: 20,
    borderRadius: 12.5,
    borderWidth: 1,
    backgroundColor: COLORS.playButton,
    borderColor: COLORS.playButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 600,
    marginTop: 30,
  },
  leftIcon: {
    width: 24,
    height: 24,
  },
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
    width: 13,
    height: 13,
  },
  lowerView: {
    flex: 5,
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 60,
    paddingLeft: 25,
  },
  detailText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 400,
    marginTop: 10,
  },
});
