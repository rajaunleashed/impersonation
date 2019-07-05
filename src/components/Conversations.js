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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          bio="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
