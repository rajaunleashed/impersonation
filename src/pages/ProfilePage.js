import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import ProfileInfo from '../components/profileComponents/ProfileInfo';
import SettingsCard from '../components/profileComponents/SettingsCard';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%'
  }
});

class ProfilePage extends Component {
  // THIS OPTION IS TO SHOW/HIDE DEFAULT NAVIGATION HEADER
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mainContainer } = styles;
    return (
      <View style={mainContainer}>
        <ProfileHeader onPress={() => this.props.navigation.goBack()} title="Profile" />
        <ScrollView>
          <ProfileInfo
            myProfile
            username="Bayar Botany"
            bio="front-end dev working at Tatty, studying 12th Grade,
          i like to read books and stuff,
          Eminem is my idol i like to read books and stuff,
          Eminem is my idol"
            profilePicture="http://bayarbotany.com/Avatar.JPG"
          />
          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('SettingsPage', {
                title: 'Account'
              })
            }
            title="Account"
            icon="key"
          />
          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('SettingsPage', {
                title: 'Chats'
              })
            }
            title="Chats"
            icon="align-left"
          />
          <SettingsCard
            onPress={() =>
              this.props.navigation.navigate('SettingsPage', {
                title: 'Notifications'
              })
            }
            title="Notifications"
            icon="bell"
          />
          <SettingsCard onPress={() => null} title="Help" icon="info-circle" />
        </ScrollView>
      </View>
    );
  }
}

export default ProfilePage;
