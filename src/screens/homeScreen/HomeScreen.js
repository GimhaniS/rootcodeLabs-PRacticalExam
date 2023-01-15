import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import user from '../../assets/user.jpg';
import { COLORS } from '../../Utils/colors';
import { RecentlyPlayedItem, MiniPlayedCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { logOut } from '../../features/user/userSlice';
import { signOut } from '../../features/user/userSlice';
import cross from '../../assets/cross.png';
const HomeScreen = () => {
  const { favTrackList } = useSelector((store) => store.trackSlice);
  const { token, userId } = useSelector((store) => store.userSlice);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalHandler = () => {
    setIsModalVisible(true);
  };

  const logOutHandler = () => {
    dispatch(signOut());
    setIsModalVisible(false);
  };
  useEffect(() => {}, [favTrackList]);

  const renderItem = ({ item }) => {
    return (
      <MiniPlayedCard
        songName={item.selectedTrack.trackName}
        album={item.selectedTrack.artworkUrl100}
      />
    );
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <View style={styles.HomeWrapper}>
        <View style={styles.headerHome}>
          <Text style={styles.GoodAfterTxt}>Good Afternoon </Text>
          <View style={styles.viewWrapper}>
            <TouchableOpacity onPress={modalHandler}>
              <Image source={user} style={styles.userIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.txt}>Recently played </Text>
        <View style={styles.homeBody}>
          {favTrackList.length !== 0 ? (
            <>
              <RecentlyPlayedItem
                songName={favTrackList[favTrackList.length - 1]?.selectedTrack.trackName}
                artist={favTrackList[favTrackList.length - 1]?.selectedTrack.artistName}
                album={favTrackList[favTrackList.length - 1]?.selectedTrack.artworkUrl100}
              />
              <FlatList
                data={favTrackList}
                renderItem={renderItem}
                extraData={favTrackList}
                keyExtractor={(item) => item}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-evenly', flex: 1, flexGrow: 1 }}
              />
            </>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 300,
                backgroundColor: COLORS.backgroundColor,
              }}
            >
              <Text style={{ color: COLORS.loginLabelColor, fontSize: 25, textAlign: 'center' }}>
                There is no favorite tracks. Add track to Favorite
              </Text>
            </View>
          )}
        </View>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalWrapper}>
          <TouchableOpacity style={styles.closeModalView} onPress={closeModal}>
            <Image source={cross} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modalTextArea}>
            <Text style={styles.loggingOutTxt}>Logging Out</Text>
            <Text style={styles.confirmTxt}>Are you sure you want to log out?</Text>
            <TouchableOpacity onPress={logOutHandler} style={styles.logOutBtn}>
              <Text style={styles.logOutTxt}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  HomeWrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  headerHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.backgroundColor,
    paddingLeft: 15,
    paddingTop: 15,
  },
  viewWrapper: {
    borderWidth: 5,
    borderRadius: 30,
    width: 60,
    height: 60,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  GoodAfterTxt: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 0,
  },
  txt: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 400,
    marginLeft: 15,
  },
  homeBody: {},
  modalWrapper: {
    width: '90%',
    height: 200,
    marginHorizontal: '2%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  closeModalView: {
    borderWidth: 0,
    borderRadius: 12,
    width: 24,
    height: 24,
    backgroundColor: COLORS.backgroundColor,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  modalTextArea: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loggingOutTxt: {
    fontSize: 20,
    fontWeight: 600,
    color: COLORS.backgroundColor,
    marginBottom: 10,
  },
  confirmTxt: {
    fontSize: 15,
    fontWeight: 400,
    color: COLORS.backgroundColor,
    marginBottom: 10,
  },
  logOutBtn: {
    borderWidth: 2,
    borderColor: COLORS.backgroundColor,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  logOutTxt: {
    fontSize: 15,
    fontWeight: 400,
    color: COLORS.backgroundColor,
  },
});
