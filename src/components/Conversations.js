import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ConversationItem from './ConversationItem';

class Conversations extends Component {
  render() {
    return (
      <ScrollView>
        {/*  we can insert More components in to this scrollView
        if we want to for ex: (SEARCH_INPUT) */}
        {this.props.children}

        {/* a Contact Component which has the followings:
        goToProfilePage={() => example()} the function when we tap on the image
        goToMessagePage={() => example()} the function when we click on the component
        imageSrc="example.com/image" the profile picture of the user
        usernme:"john Killer"  the name of the user
        description="Hey, Its me"  the message
        time="15:00"  the time the message sent/recieved
        notification= "5" number of notications 
        hasStory : if you pass this parameter, then a circle will appear around the image
        isBlocked: wether the target is blocked or not
        isMuted: wether the target is muted or not
        */}
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          bio="https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
      </ScrollView>
    );
  }
}

export default Conversations;
