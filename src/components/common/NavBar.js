import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavItem from './NavItem';

//STYLESHEET FOR THE STYLES
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'space-around',
    paddingTop: 5
  }
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* SELECTED State: we specify the state to know which nav section is selected */
      selected: 'Chats'
    };
  }
  /* Function: we click on a navItem and choose a state(page) and set our selected with that item
ex: we tap on Chats... it will set the selected state to selected:'chats' */
  selectNavItem = value => {
    this.setState({
      selected: value
    });
  };
  render() {
    console.log(` selectedTab: ${this.props.selectedNumber}`);
    const { headerContainer } = styles;

    return (
      <View style={headerContainer}>
        {/* NAVITEM: is a Component for NavBar, which is created like this: 
        <NavItem
        name="the displayed text here"
        isSelected={this.state.selected === 'name'}
        onPress={this.selectNavItem} the helper function we have written outside here which is:
        selectNavItem = value => {
       this.setState({
             selected: value
           });
       };
        /> */}
        <NavItem
          name="Calls"
          isSelected={this.state.selected === 'Calls'}
          onPress={this.selectNavItem}
        />
        <NavItem
          name="Chats"
          isSelected={this.state.selected === 'Chats'}
          onPress={this.selectNavItem}
        />
        <NavItem
          name="Stories"
          isSelected={this.state.selected === 'Stories'}
          onPress={this.selectNavItem}
        />
      </View>
    );
  }
}

export default NavBar;
