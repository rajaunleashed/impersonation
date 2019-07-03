import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

/* STYLESHEETS */
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  innerContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10
  },
  inputAndMicrophoneStyle: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    flex: 3,
    marginHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputStyle: {
    backgroundColor: 'transparent',
    paddingLeft: 20,
    color: 'black',
    flex: 3,
    fontSize: 15,
    maxHeight: 100,
    alignSelf: 'center'
  },
  microphoneButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: 'white'
  },
  sendButtonStyle: {
    backgroundColor: '#f09511',
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
    // elevation: 3
  }
});
class ChatInput extends Component {
  render() {
    /* DECONSTRUCTION: Styles */
    const {
      container,
      innerContainer,
      inputAndMicrophoneStyle,
      inputStyle,
      microphoneButtonStyle,
      sendButtonStyle
    } = styles;
    return (
      /* Main Container: Holds Everything in this Class */
      <View style={container}>
        {/* Inner Container: Holds (Chat Input, and Microphone Button) and (Send Button) */}
        <View style={innerContainer}>
          {/* Input And MicrophoneButton Container: Contains Chat Input and Microphone Button */}
          <View style={inputAndMicrophoneStyle}>
            <TextInput multiline placeholder="type something..." style={inputStyle} />
            <TouchableOpacity style={microphoneButtonStyle}>
              <Icon name="microphone" size={25} color="#f09511" />
            </TouchableOpacity>
          </View>
          {/* Send Button: Contains Send Icon */}
          <TouchableOpacity style={sendButtonStyle}>
            <Icon name="send" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ChatInput;
