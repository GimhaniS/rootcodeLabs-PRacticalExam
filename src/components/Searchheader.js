import { StyleSheet, Text, TextInput, Image, View } from 'react-native';
import React from 'react';
import search from '../assets/yellow-search.png';
import { COLORS } from '../Utils/colors';
const Searchheader = ({ ...props }) => {
  return (
    <View style={styles.searchHeader}>
      <View style={styles.exploreWrapper}>
        <Image source={search} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} {...props} />
      </View>
      <Text style={styles.cancelText}>Cancel</Text>
    </View>
  );
};

export { Searchheader };

const styles = StyleSheet.create({
  searchHeader: {
    // flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 10,
    backgroundColor: COLORS.backgroundColor,
  },
  exploreWrapper: {
    flexDirection: 'row',
    borderBottomColor: COLORS.branchColor,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  cancelText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 500,
  },
  searchInput: {
    width: '85%',
    marginLeft: 10,
    color: COLORS.white,
  },
});
