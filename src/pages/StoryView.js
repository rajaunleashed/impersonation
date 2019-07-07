import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  innerContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%'
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignContent: 'center',
    overflow: 'hidden',
    paddingVertical: 10
  },
  profilePicStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    alignSelf: 'center'
  },
  titleAndSubtitleContainer: {
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: 'white',
    fontSize: theme.fontSize.title
  },
  subtitleTextStyle: {
    color: theme.colors.description,
    fontSize: theme.fontSize.description
  },
  borderTimeContainer: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
    width: '80%'
  },
  storyImageContainer: {
    backgroundColor: 'black'
  },
  storyImageStyle: {
    height: '100%',
    maxWidth: '100%'
  },
  buttonsContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    flexDirection: 'row',
    marginTop: 80,
    height: '100%'
  },
  closeButton: {
    height: '100%',
    flex: 0.65
  },
  previewsButton: {
    height: '100%',
    flex: 0.35
  }
});

class StoryView extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* Calling the props */
    const username = this.props.navigation.getParam('username', 'no name available');
    const time = this.props.navigation.getParam('time', 'not available');
    const imageSrc = this.props.navigation.getParam('imageSrc', null);
    const storyImage = this.props.navigation.getParam('storyImage', null);
    return (
      <View style={styles.mainContainer}>
        {/* The previews and next button */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.previewsButton}>
            <Text style={{ color: 'transparent' }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.closeButton}
          >
            <Text style={{ color: 'transparent' }}>1</Text>
          </TouchableOpacity>
        </View>

        {/* The profile Container */}
        <View style={styles.innerContainer}>
          <View style={styles.profileContainer}>
            <Image style={styles.profilePicStyle} source={{ uri: imageSrc }} />
            <View style={styles.titleAndSubtitleContainer}>
              <Text style={styles.titleTextStyle}> {username} </Text>
              <Text style={styles.subtitleTextStyle}> {time} </Text>
            </View>
          </View>
          <View style={styles.borderTimeContainer} />
        </View>
        {/* The big story */}
        <View style={styles.storyImageContainer}>
          <Image style={styles.storyImageStyle} source={{ uri: storyImage }} />
        </View>
      </View>
    );
  }
}

export default StoryView;
