import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
/* Stylesheets: You can style Everything Here */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 10
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 10
  },
  /* Here you can change The styles for the Text (HEADER) */
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center'
  },
  imageStyle: {
    height: 40,
    width: 40,
  },
  imageContainer: {
    borderRadius: 20,
    height: 40,
    width: 40,
    overflow: 'hidden'

  },
});

class Header extends Component {
  render() {
    /* DECONSTRUCTION: styles */
    const { headerContainer, headerTitleStyle, imageStyle, container, imageContainer } = styles;

    return (
      /* Main Container: it contains everything related to header */
      <View style={container}>
        <View style={headerContainer}>
          {/* The header Text */}
          <Text style={headerTitleStyle}>{this.props.title}</Text>
          {/* Your Profile Button: tap it and you will see settings related to your profile  */}
          <TouchableOpacity
          style={[imageContainer]}
            onPress={() => {
              this.props.navigation.navigate('ProfilePage');
            }}
          >
            <Image style={imageStyle} source={{ uri: 'http://bayarbotany.com/Avatar.JPG' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
