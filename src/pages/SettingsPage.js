import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileHeader from '../components/profileComponents/ProfileHeader';
import SettingsCard from '../components/profileComponents/SettingsCard';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../theme';
/* STYLES: you can change Colors, Sizes, Shapes, ETC */
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.tabBackground,
    width: '100%',
    flexDirection: 'column',
    flex: 1
  },
  titleContainer: {
    alignItems: 'center'
  },
  titleStyle: {
    color: theme.colors.title,
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
class SettingsPage extends Component {
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
    const title = this.props.navigation.getParam('title', 'Settings');
    return (
      <View style={mainContainer}>
        <ProfileHeader title={title} onPress={() => this.props.navigation.goBack()} />
        <ScrollView>
          <SettingsCard onPress={() => null} title="do Something" icon="bell" />
          <SettingsCard onPress={() => null} title="do Something" icon="phone" />
          <SettingsCard onPress={() => null} title="do Something" icon="circle" />
          <SettingsCard onPress={() => null} title="do Something" icon="ban" />
          <SettingsCard onPress={() => null} title="do Something" icon="volume-up" />
          <SettingsCard onPress={() => null} title="do Something" icon="bell" />
        </ScrollView>
      </View>
    );
  }
}

export default SettingsPage;
