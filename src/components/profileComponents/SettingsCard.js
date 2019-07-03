import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 20
  }
});

const SettingsCard = props => {
  const { title, icon } = props;
  const { mainContainer, textStyle, innerContainer } = styles;
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={mainContainer}>
      <View style={innerContainer}>
        <Icon name={icon} size={20} color={props.color || '#0084ff'} />
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;
