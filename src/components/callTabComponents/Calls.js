import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CallItem from './CallItem';

class Calls extends Component {
  render() {
    return (
      <ScrollView>
        <CallItem
          imageSrc="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1915&q=80"
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
          imageSrc="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1915&q=80"
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
          imageSrc="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1915&q=80"
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
          imageSrc="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1915&q=80"
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
          imageSrc="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1915&q=80"
          username="Bayar Botany"
          /* callStatus --------
     0 = you called but he didnt answer
     1 = you called and he answered
     2 = they called but you didnt answer
     3 = they called and you answered */
          callStatus={0}
          time="12:00 PM Today"
        />
      </ScrollView>
    );
  }
}

export default Calls;
