import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { headerStyles } from '../styles/HeaderStyles';

const Header = ({ onCategoryPress, headerItems }) => {
  return (
    <View style={headerStyles.header}>
      {headerItems.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => onCategoryPress(item)}
          style={({ pressed }) => [
            headerStyles.headerButton,
            pressed && headerStyles.headerButtonPressed
          ]}
        >
          <Text style={headerStyles.headerText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Header;