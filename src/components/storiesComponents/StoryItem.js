import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import MiniProfile from '../common/MiniProfile';
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
  /* The messages Style */
  descriptionTextStyle: {
    fontSize: 13,
    width: 240,
    color: theme.colors.description
  },
  /* The time that the message has been sent ---  Style */
  timeTextStyles: {
    fontSize: 11,
    color: theme.colors.subtitle,
    fontWeight: '300'
  },
  /* the notification Number__Container Style */
  notificationCircleStyle: {
    backgroundColor: theme.colors.badgeBackground,
    borderRadius: 50,
    height: 20,
    width: 20,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  /* THe notication number__Text Style */
  notificationTextStyle: {
    color: theme.colors.badgeText,
    fontWeight: 'bold',
    fontSize: 10
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
    const {
      containerStyle,
      buttonStyle,
      imageStyle,
      imageContainer,
      descriptionTextStyle,
      usernameTextStyle,
      timeTextStyles
    } = styles;
    return (
      /* The whole Container */
      <View style={containerStyle}>
        {/* The Button  */}
        <TouchableOpacity
          style={buttonStyle}
        >
          {/* The Profile Pic Button */}
          <View
            style={[imageContainer, this.showStoryCircle()]}
          >
            {/* Image */}
            <Image style={[imageStyle]} source={{ uri: this.props.imageSrc }} />
          </View>
          {/* Username, message, Time, and notification number Container */}
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
              <Text numberOfLines={1} style={usernameTextStyle}>
                {this.props.username}
              </Text>
              <Text style={timeTextStyles}>{this.props.time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(StoryItem);
