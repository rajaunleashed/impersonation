import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import StoryItem from "./StoryItem";

const styles = StyleSheet.create({
  lineStyle: {
    paddingLeft: 10,
    marginBottom: 5
  },
  friendsTextStyle: {
    color: "black",
    fontSize: 18
  }
});

class Stories extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
        <StoryItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Tap to add Story"
          time=""
          isNew
        />
        <View style={styles.lineStyle}>
          <Text style={styles.friendsTextStyle}>Friends Stories</Text>
        </View>
        <View
          style={{
            height: 1,
            width: "70%",
            backgroundColor: "#ddd",
            marginLeft: 10,
            marginBottom:20
          }}
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Jack"
          time=""
          isNew
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Jane"
          time="12:00"
          isNew
        />

        <StoryItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Sarah"
          time=""
          isNew
        />
      </ScrollView>
    );
  }
}

export default Stories;
