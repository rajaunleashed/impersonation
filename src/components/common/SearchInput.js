import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//STYLES
const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  searchRow: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  searchInputStyle: {
    paddingHorizontal: 30,
    backgroundColor: '#f0f0f0',
    fontSize: 15,
    height: 45,
    flex: 1
  }
});

class SearchInput extends Component {
  render() {
    /* Deconstruction */
    const { searchContainer, searchInputStyle, searchRow } = styles;
    return (
      /* The main Container component */
      <View style={searchContainer}>
      {/* The Row Container component */}
        <View style={searchRow}>
          {/* The text Input which we write in it */}
          <Icon size={20} name={'search'} color="#999" />
          <TextInput
            maxLength={10}
            placeholder="Search"
            style={searchInputStyle}
          />
        </View>
      </View>
    );
  }
}

export default SearchInput;
