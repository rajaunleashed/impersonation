import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Calls from '../components/callTabComponents/Calls';

class CallsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Calls />
      </ScrollView>
    );
  }
}

export default CallsTab;
