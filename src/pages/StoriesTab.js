import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Stories from '../components/storiesComponents/Stories';

class StoriesTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Stories />
      </ScrollView>
    );
  }
}

export default StoriesTab;
