import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import MiniProfile from './common/MiniProfile';

const styles = StyleSheet.create({
  /* The Whole Components Style */
  containerStyle: {
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
    width: 55,
  },
  /* The username Text Style */
  usernameTextStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    width: 210
  },
  /* The messages Style */
  descriptionTextStyle: {
    fontSize: 13,
    width: 240,
    color: '#9f9f9f'
  },
  /* The time that the message has been sent ---  Style */
  timeTextStyles: {
    fontSize: 11,
    color: 'black',
    fontWeight: '300'
  },
  /* the notification Number__Container Style */
  notificationCircleStyle: {
    backgroundColor: '#c3c6cb',
    borderRadius: 50,
    height: 20,
    width: 20,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  /* THe notication number__Text Style */
  notificationTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },
  /* ============= MODAL STYLES ============= */
  modalMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 3,
    overflow: 'hidden',

  },
  modalUsernameStyle: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  modalImageStyle: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  modalOptionsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  modalIconContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});

class ConversationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  disableModal = () => {
    this.setModalVisible(!this.state.modalVisible);
  }

  /* Function: check if theres notification:
  types: Number Circle  and image Circle  */
  showNotification(type) {
    const { notificationCircleStyle, notificationTextStyle } = styles;
    /* The number Notification Style */
    if (this.props.notification && type === 'number') {
      return (
        <View style={notificationCircleStyle}>
          <Text style={notificationTextStyle}>{this.props.notification}</Text>
        </View>
      );
      /* The Image Circle Notification Style */
    } else if (this.props.notification && type === 'imageCircle') {
      return {
        borderColor: '#0084ff'
      };
    }
  }
  showStoryCircle() {
    if (this.props.hasStory) {
      return {
        borderColor: '#0084ff',
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
      timeTextStyles,
    } = styles;
    return (
      /* The whole Container */
      <View style={containerStyle}>
        {/* The Button  */}
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('MessagePage', {
              username: this.props.username,
              bio: this.props.bio,
              imageSrc: this.props.imageSrc,
              isBlocked: this.props.isBlocked,
              isMuted: this.props.isMuted
            })
          }
          style={buttonStyle}
        >
          {/* The Profile Pic Button */}
          <TouchableOpacity
          style={[imageContainer, this.showStoryCircle()]}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            {/* Image */}
            <Image
              style={[imageStyle]}
              source={{ uri: this.props.imageSrc }}
            />
          </TouchableOpacity>
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

            {/* Message and Notification Container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text numberOfLines={1} style={descriptionTextStyle}>
                {this.props.description}
              </Text>
              {this.showNotification('number')}
            </View>
          </View>
        </TouchableOpacity>

        {/* MODAL: a pop up when you tap on a profile pic in message view,
         it shows you the user enlarged profile pic and some options(call, text, info) */}
        <Modal animationType="slide" transparent visible={this.state.modalVisible}>
          <MiniProfile
          username={this.props.username}
          imageSrc={this.props.imageSrc}
          bio={this.props.bio}
          isBlocked={this.props.isBlocked}
          isMuted={this.props.isMuted}
          hide={this.disableModal} 
          />
        </Modal>
      </View>
    );
  }
}

export default withNavigation(ConversationItem);
