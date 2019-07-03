import React, { Component } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Conversations from '../components/Conversations';
import SearchInput from '../components/common/SearchInput';

/* STYLESHEET */
const styles = StyleSheet.create({
  /* FLOATING ACTION BUTTON Style */
  fabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 100,
    elevation: 5,
    shadowColor: '#f09511',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  }
});

class MainPage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {/* The Color of Status Bar (battery level, notifcitaion bar, and wifi stats) */}
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* CONVERSATIONS Component */}
        <Conversations>
          {/* SEARCH_INPUT Component */}
          <SearchInput />
        </Conversations>
        {/* FLOATING ACTION BUTTON */}
        <TouchableOpacity style={styles.fabStyle}>
          <Icon name="plus" size={25} color="#f09511" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainPage;
