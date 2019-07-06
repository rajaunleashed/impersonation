import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  /* The Whole Components Style */
  containerStyle: {
    backgroundColor: theme.colors.tabItemBackground
  },
  /* The components Style */
  buttonStyle: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 10
  },
  /* Profile Image Container */
  imageContainer: {
    marginRight: 15,
    borderRadius: 25,
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderColor: theme.colors.primary,
    borderWidth: 2
  },
  /* The profile Picture Style */
  imageStyle: {
    height: 55,
    width: 55
  },
  textsContainer: {
    justifyContent: 'center'
  },
  usernameTextStyle: {
    color: theme.colors.title,
    fontSize: theme.fontSize.title
  },
  timeTextStyle: {
    color: theme.colors.subtitle,
    fontSize: theme.fontSize.description
  }
});

class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      /* The whole Container */
      <View style={styles.containerStyle}>
        {/* The Button  */}
        <TouchableOpacity style={styles.buttonStyle}>
          {/* The Profile Pic View */}
          <View style={styles.imageContainer}>
            <Image style={[styles.imageStyle]} source={{ uri: this.props.imageSrc }} />
          </View>
          <View style={styles.textsContainer}>
            <Text numberOfLines={1} style={styles.usernameTextStyle}>
              {this.props.username}
            </Text>
            <Text numberOfLines={1} style={styles.timeTextStyle}>
              {this.props.time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(StoryItem);
