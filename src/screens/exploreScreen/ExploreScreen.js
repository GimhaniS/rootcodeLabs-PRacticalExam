import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TrackCard, Searchheader } from '../../components';
import { COLORS } from '../../Utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackList } from '../../features/Track/trackSlice';
import { getSearchTrackList } from '../../features/searchTrack/searchTrackSlice';
const ExploreScreen = ({ navigation }) => {
  const { tracksList, isLoading } = useSelector((store) => store.trackSlice);
  const { searchTracksList } = useSelector((store) => store.searchTrackRSlice);

  const [searchedTerm, setSearchedTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrackList());
    dispatch(getSearchTrackList());

    // console.log('isLoading======', isLoading);
  }, []);

  const trackCardhandler = (item) => {
    navigation.navigate('SingleTrackScreen', { item });
  };

  const renderItem = ({ item }) => {
    return (
      <TrackCard
        trackCardhandler={() => trackCardhandler(item)}
        album={item.artworkUrl100}
        trackName={item.trackName}
        artistName={item.artistName}
        collectionName={item.collectionName}
        key={item.trackName}
      />
    );
  };
  return (
    <View style={styles.exploreWrapper}>
      <Searchheader value={searchedTerm} onChangeText={(val) => setSearchedTerm(val)} />
      {/* search function */}
      {searchedTerm &&
        searchTracksList
          .filter((item) => {
            const searchedLetter = searchedTerm.toString().toLowerCase();
            const termFiltered = 'Jack Johnson';
            return searchedLetter && item.artistName?.toLowerCase() === termFiltered.toLowerCase();
          })
          .slice(0, 10)
          .map((el) => {
            return (
              <TrackCard
                trackCardhandler={() => trackCardhandler(el)}
                album={el.artworkUrl100}
                trackName={el.trackName}
                artistName={el.artistName}
                collectionName={el.collectionName}
                key={el.trackName}
              />
            );
          })}
      {isLoading && !searchedTerm ? (
        <ActivityIndicator size={'large'} color={COLORS.branchColor} />
      ) : (
        <FlatList
          data={tracksList}
          renderItem={renderItem}
          extraData={tracksList}
          keyExtractor={(item) => item.trackId}
          initialNumToRender={15}
        />
      )}
    </View>
  );
};

export { ExploreScreen };

const styles = StyleSheet.create({
  exploreWrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
});
