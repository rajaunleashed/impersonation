import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

/* STYLES */
const styles = StyleSheet.create({
  navItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 10
  },
  navItemSelectedStyle: {
    borderBottomColor: '#0084ff',
    borderBottomWidth: 3
  },
  navItemTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray'
  },
  navItemTextSelectedStyle: {
    fontWeight: '500',
    color: 'black'
  }
});

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* The isSelected state is a boolean(true or false)
      it determines wether this navItem is selected or not */
      isSelected: false
    };
  }

  /* ComponentDidmount is a function that starts right after 
  the Component loads */
  componentDidMount() {
    this.setState({
      /* We set the state to true if isSelected == true */
      isSelected: this.props.isSelected
    });
  }

  /* ComponentWillReceiveProps: is a function that starts whenever a prop is received or updated */
  componentWillReceiveProps(np) {
    /* check if the old isSelected is not equal To the new isSelected */
    if (this.state.isSelected != np.isSelected) {
      /* sets the state of isSelected to the new isSelected */
      this.setState({
        isSelected: np.isSelected
      });
    }
  }
  render() {
    /* Deconstruction: Styles */
    const {
      navItemTextStyle,
      navItemStyle,
      navItemSelectedStyle,
      navItemTextSelectedStyle
    } = styles;
    /* If the isSelected state is set to True
    it renders this code here */
    if (this.state.isSelected) {
      return (
        <TouchableOpacity style={[navItemStyle, navItemSelectedStyle]}>
          <Text style={[navItemTextStyle, navItemTextSelectedStyle]}>{this.props.name}</Text>
        </TouchableOpacity>
      );
    }
    /* If the isSelected state is set to False
    it renders this code here */
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.name)} style={navItemStyle}>
        <Text style={navItemTextStyle}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default NavItem;
