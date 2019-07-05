import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  /* The Whole Components Style */
  containerStyle: {
    backgroundColor: theme.colors.tabItemBackground,
    paddingBottom: 25,
    paddingRight: 20,
    paddingLeft: 10
  },
  /* The components Style */
  buttonStyle: {
    flexDirection: 'row'
  },
  /* Profile Image Container */
  imageContainer: {
    marginRight: 15,
    borderRadius: 25,
    height: 50,
    width: 50,
    overflow: 'hidden'
  },
  /* The profile Picture Style */
  imageStyle: {
    height: 55,
    width: 55
  },
  /* The username Text Style */
  usernameTextStyle: {
    fontSize: 16,
    color: theme.colors.title,
    fontWeight: '500',
    width: 210
  },
  /* The time that the message has been sent ---  Style */
  timeTextStyles: {
    fontSize: 11,
    color: theme.colors.subtitle,
    fontWeight: '300'
  }
});

class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  showStoryCircle() {
    if (this.props.isNew) {
      return {
        borderColor: theme.colors.primary,
        borderWidth: 2
      };
    }
  }
  render() {
    return (
      /* The whole Container */
      <View style={styles.containerStyle}>
        {/* The Button  */}
        <TouchableOpacity style={styles.buttonStyle}>
          {/* The Profile Pic View */}
          <View style={[styles.imageContainer, this.showStoryCircle()]}>
            {/* Image */}
            <Image style={[styles.imageStyle]} source={{ uri: this.props.imageSrc }} />
          </View>
          {/* Username and Time View */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center'
            }}
          >
            {/* Username And Time container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text numberOfLines={1} style={styles.usernameTextStyle}>
                {this.props.username}
              </Text>
              <Text style={styles.timeTextStyles}>{this.props.time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(StoryItem);
