import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CallItem from './CallItem';

class Calls extends Component {
  render() {
    return (
      <ScrollView>
        <CallItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          /* callStatus --------
     0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
          callStatus={0}
          time="12:00 PM Today"
        />
        <CallItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="bro"
          callStatus={1}
          time="12:00 PM Today"
        />

        <CallItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          callStatus={2}
          time="12:00 PM Today"
        />

        <CallItem
          imageSrc="http://bayarbotany.com/Avatar.JPG"
          username="Bayar Botany"
          callStatus={3}
          time="12:00 PM Today"
        />
      </ScrollView>
    );
  }
}

export default Calls;
