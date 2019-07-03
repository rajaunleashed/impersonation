import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePicture from '../components/onCallComponents/ProfilePicture';
import OptionsButtons from '../components/onCallComponents/OptionButtons';

const styles = StyleSheet.create({
  ProfileContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingBottom: 50
  },
  usernameAndTime: {
    paddingVertical: 50,
    alignItems: 'center'
  },
  usernameTextStyle: {
    fontSize: 18,
    color: '#0084ff'
  },
  optionsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    paddingBottom: 90
  },
  endCallContainer: {
    alignItems: 'center'
  }
});

class OnCallPage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      speakerOn: false,
      isMuted: false
    };
  }

  /* FUNCTION: Shows speaker Button
  - tap on it to turn off/on the speaker */
  showMuteButton() {
    /* CHECKS if speakerOn is true 
    -shows speaker Button
    -sets the state speakerOn to false */
    if (this.state.isMuted) {
      return (
        <OptionsButtons
          onPress={() => this.setState({ isMuted: false })}
          name="microphone-slash"
          size={60}
          color="rgba(240, 149, 17, 1)"
        />
      );
    }

    /* CHECKS if speakerOn is false 
    -shows speaker Button
    -sets the state speakerOn to true */
    return (
      <OptionsButtons
        onPress={() => this.setState({ isMuted: true })}
        name="microphone-slash"
        size={60}
        color="rgba(240, 149, 17, 0.3)"
      />
    );
  }

  /* FUNCTION: Shows speaker Button
  - tap on it to turn off/on the speaker */
  showSpeakerutton() {
    /* CHECKS if speakerOn is true 
    -shows speaker Button
    -sets the state speakerOn to false */
    if (this.state.speakerOn) {
      return (
        <OptionsButtons
          onPress={() => this.setState({ speakerOn: false })}
          name="volume-up"
          size={60}
          color="rgba(0, 132, 255, 1)"
        />
      );
    }

    /* CHECKS if speakerOn is false 
    -shows speaker Button
    -sets the state speakerOn to true */
    return (
      <OptionsButtons
        onPress={() => this.setState({ speakerOn: true })}
        name="volume-up"
        size={60}
        color="rgba(0, 132, 255, 0.3)"
      />
    );
  }

  render() {
    const {
      ProfileContainer,
      usernameAndTime,
      usernameTextStyle,
      optionsContainerStyle,
      endCallContainer
    } = styles;
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'no name available');
    const imageSrc = navigation.getParam('imageSrc', null);
    return (
      <View>
        <View style={ProfileContainer}>
          <View style={usernameAndTime}>
            <Text style={usernameTextStyle}>{username}</Text>
            <Text> 00:15</Text>
          </View>
          <ProfilePicture imageSrc={imageSrc} />
        </View>
        <View />
        <View style={optionsContainerStyle}>
          {this.showMuteButton()}
          {this.showSpeakerutton()}
        </View>

        <View style={endCallContainer}>
          <OptionsButtons
            onPress={() => this.props.navigation.goBack()}
            name="phone"
            size={60}
            color="#FE3939"
          />
        </View>
      </View>
    );
  }
}

export default OnCallPage;
