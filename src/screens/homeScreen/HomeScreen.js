import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import user from '../../assets/user.jpg';
import { COLORS } from '../../Utils/colors';
import { RecentlyPlayedItem, MiniPlayedCard } from '../../components';

const HomeScreen = () => {
  const logOutHandler = () => {};
  return (
    <View style={styles.HomeWrapper}>
      <View style={styles.headerHome}>
        <Text style={styles.GoodAfterTxt}>Good Afternoon </Text>
        <View style={styles.viewWrapper}>
          <TouchableOpacity onPress={logOutHandler}>
            <Image source={user} style={styles.userIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.txt}>Recently played </Text>
      <View style={styles.homeBody}>
        <RecentlyPlayedItem songName="September 16" artist="Russ" />
        <MiniPlayedCard songName="September 16" />
      </View>
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  HomeWrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  headerHome: {
    // flex: 1,
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
});
