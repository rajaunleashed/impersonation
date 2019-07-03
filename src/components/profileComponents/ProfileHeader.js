import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* STYLES: you can change Colors, Sizes, Shapes, ETC */
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'column'
  },
  titleContainer: {
    alignItems: 'center'
  },
  titleStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* DECONSTRUCTION : ease of our work */
    const { mainContainer, titleContainer, titleStyle, buttonContainer } = styles;
    return (
      <View style={mainContainer}>
        <View style={titleContainer}>
          {/* Title Text: it shows the title text ex: Home
          in the parent component You write
          <ProfileHeader title="Home" /> */}
          <Text style={titleStyle}>{this.props.title}</Text>
        </View>
        {/* back Button: tap it and you will be taken back to the parent component/page */}
        <TouchableOpacity onPress={this.props.onPress} style={buttonContainer}>
          <Icon name="angle-left" size={30} color="#f09511" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileHeader;
