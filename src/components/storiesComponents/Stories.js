import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import StoryItem from './StoryItem';

const styles = StyleSheet.create({
  lineStyle: {
    paddingLeft: 10,
    marginBottom: 5
  },
  friendsTextStyle: {
    color: 'black',
    fontSize: 18
  },
  friendsStoriesView: {
    height: 1,
    width: '70%',
    backgroundColor: '#ddd',
    marginLeft: 10,
    marginBottom: 20
  }
});

class Stories extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
        {/* A button That you can tap to add a story */}
        <StoryItem
          imageSrc="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Tap to add a Story"
          isNew
        />
        {/* Header for Friends Stories */}
        <View style={styles.lineStyle}>
          <Text style={styles.friendsTextStyle}>Friends Stories</Text>
        </View>
        <View style={styles.friendsStoriesView} />
        {/* Friend Stories */}
        <StoryItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Jack"
          time="3 Hours left"
          isNew
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/1895160/pexels-photo-1895160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Jane"
          time="22 Hours left"
          isNew
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Sarah"
          time="1 Hours left"
          isNew
        />
      </ScrollView>
    );
  }
}

export default Stories;
