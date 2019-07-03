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
          bio="I'am Bayar, I like to read books, make games, write code, and mostly i want to turn 18"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
          hasStory
          isBlocked
          isMuted
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/18882038_10212803004701136_3873293031271413283_n.jpg?_nc_cat=110&_nc_oc=AQl9mqFwMjImZxSnB7Bqo931H_PBiIq3k5fPb7e4CXbjOVUaOhv-zaq-yi0E__Zjqqs&_nc_ht=scontent.febl5-1.fna&oh=b44ff9f51c6855fc572b22a32f88e807&oe=5DC3AD01"
          username="Bro"
          bio="Co-Founder and CTO at FastWares"
          description="Hello, I had some questions are u available"
          time="12:00 PM"
          notification="3"
          isBlocked
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/61970598_2176504122404214_280600624448405504_n.jpg"
          username="Dad"
          bio="I am a father !"
          description="It's a busy day"
          time="12:00 PM"
          hasStory
          isMuted
          //notification="2"
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/48418728_1904044866380354_1721203367868366848_n.jpg?_nc_cat=107&_nc_oc=AQnXpMT1P77S14xClO4ZsrWt4CExa3pBaaf1ygosEL4_RMhp10uan8RrKhAcfFLxGvA&_nc_ht=scontent.febl5-1.fna&oh=d609b40f28e70c33b62754d723511082&oe=5D860DFD"
          username="Mom"
          description="Hello, how are you??"
          time="12:00 PM"
          //notification="5"
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-1/37746636_1473671466110787_4173583041949597696_n.jpg?_nc_cat=102&_nc_oc=AQkbjClQAsJhy9dbvfNslC-aw8yvJK7GHI559GxMhx1ebRn-RiVwiOCOovFLtQch42M&_nc_ht=scontent.febl5-1.fna&oh=6f4dd135af13c26d7e05ec1d69f360f4&oe=5DBCAF80"
          username="Princess"
          bio="i like books"
          description="Hello, how are you??"
          time="12:00 PM"
          notification="1"
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/55575775_2220002658057194_808544494168309760_n.jpg?_nc_cat=111&_nc_oc=AQnIVKmzQQOtA0YL-EOqsnU3mFoDZrYwbTPgz7QMc74ghNA7jOkMZuz6yss6DaCSuaI&_nc_ht=scontent.febl5-1.fna&oh=279fb118e25d121f2a67b3e03763df10&oe=5D845473"
          username="Wadood Shakir"
          bio="i like books, Cars, and coding"
          description="Hello, how are you??"
          time="12:00 PM"
          //notification="1"
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/46789513_10204871768311568_3385107040169885696_n.jpg?_nc_cat=110&_nc_oc=AQm9FLEFu6n4xIElvs1bxOT3qHqTouqqRbqtbYUBdnUOTxBoMQOmeMsoeVYaWoMt6AQ&_nc_ht=scontent.febl5-1.fna&oh=213382dc44c3d860e32d581eb05a3331&oe=5D8651C2"
          username="Danar d. Kayfi"
          bio="i like to make games with Unity"
          description="You: Hello, how are you??"
          time="12:00 PM"
          //notification="1"
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/20664611_1972325609681535_8069624654215558582_n.jpg?_nc_cat=105&_nc_oc=AQkcW4BhwaQhGqDkExNRcL-cl741Y-GQ1Qmw5lH8vr0q7RmheR3H7TkvM9hQiOcPQZc&_nc_ht=scontent.febl5-1.fna&oh=1946d1aaad706b90637fd0a7e3390388&oe=5DBDB671"
          username="Someone someoneaaaaa"
          description="Hello, how are youssssssssssssss??"
          time="12:00 PM"
          notification="1"
        />
        <ConversationItem
          imageSrc="https://scontent.febl5-1.fna.fbcdn.net/v/t1.0-9/20664611_1972325609681535_8069624654215558582_n.jpg?_nc_cat=105&_nc_oc=AQkcW4BhwaQhGqDkExNRcL-cl741Y-GQ1Qmw5lH8vr0q7RmheR3H7TkvM9hQiOcPQZc&_nc_ht=scontent.febl5-1.fna&oh=1946d1aaad706b90637fd0a7e3390388&oe=5DBDB671"
          username="Someone someoneaaaaa"
          description="Hello, how are youssssssssssssss??"
          time="12:00 PM"
          notification="1"
        />
      </ScrollView>
    );
  }
}

export default Conversations;
