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
          imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          username="Bruce Mars"
          bio="my name is someone, i work"
          description="Hello, how are you??"
          time="5:00 PM"
          notification="3"
          isBlocked
          isMuted
          hasStory
        />
        <ConversationItem
          imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="jack jones"
          bio="my name is someone, i work"
          description="Hello, how are you??"
          time="5:00 PM"
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="eliza"
          bio="my name is someone, i work"
          description="Hello, how are you??"
          time="5:00 PM"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Victoria Martinez"
          bio="my name is someone, i work"
          description="Hello, how are you??"
          time="5:00 PM"
          notification="3"
          hasStory
          isMuted
        />
        <ConversationItem
          imageSrc="https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Diana Bruce"
          bio="my name is someone, i work"
          description="Hello, how are you??"
          time="5:00 PM"
          notification="3"
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          username="Zack Allen"
          bio="my name is someone, i work"
          description="Hello, how are you??"
          time="5:00 PM"
          notification="3"
          isBlocked
          isMuted
          hasStory
        />
      </ScrollView>
    );
  }
}

export default Conversations;
