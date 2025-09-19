import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { topGridStyles } from '../styles/TopGridStyles';

const TopGridButtons = ({ onItemPress }) => {
  const topGridItems = [
    { title: 'Pop' },
    { title: 'Hip-Hop' },
    { title: 'Rock' },
    { title: 'Country' },
    { title: 'Jazz' },
    { title: 'Electronic' }
  ];

  return (
    <View style={topGridStyles.section}>
      <View style={topGridStyles.container}>
        {topGridItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={topGridStyles.item}
            onPress={() => onItemPress(item.title)}
          >
            <Text style={topGridStyles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TopGridButtons;