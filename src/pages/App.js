import React, { Component } from 'react';
import { View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  SafeAreaView
} from 'react-navigation';
import MainPage from './MainPage';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import FriendsProfilePage from './FriendsProfilePage';
import CallsTab from './CallsTab';
import StoriesTab from './StoriesTab';
import Header from '../components/common/Header';
import SettingsPage from './SettingsPage';
import OnCallPage from './OnCallPage';
// NAVIGATOR FUNCTION
const ChatPageNavigator = createStackNavigator(
  {
    Home: createMaterialTopTabNavigator(
      {
        Calls: CallsTab,
        Chats: MainPage,
        Stories: StoriesTab
      },
      {
        initialRouteName: 'Chats',
        tabBarOptions: {
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          tabStyle: {
            backgroundColor: 'transparent',
          },
          labelStyle: {
            fontWeight: 'bold'
          },
          indicatorStyle: {
            backgroundColor: '#0084ff'
          },
          style: {
            backgroundColor: 'white',

          }
        },
        navigationOptions: {
          /* HEADER Component
        The onPress function is to
        navigate to ProfilePage when you click on the profile picture */
          header: <Header title="BlueChat" />
        }
      }
    ),
    MessagePage: ChatPage,
    ProfilePage,
    FriendsProfilePage,
    SettingsPage,
    OnCallPage
  },
  {
    //THE DEFAULT PAGE WHEN APP STARTS
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(ChatPageNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
