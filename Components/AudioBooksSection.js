import React from 'react';
import { View, Text, Image } from 'react-native';
import { audiobooksStyles } from '../styles/AudiobooksStyles';

const AudiobooksSection = () => {
  return (
    <View style={audiobooksStyles.section}>
      <Text style={audiobooksStyles.sectionTitle}>Audiobooks for you</Text>
      <View style={audiobooksStyles.container}>
        <Image 
          source={{uri: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'}}
          style={audiobooksStyles.image}
        />
      </View>
    </View>
  );
};

export default AudiobooksSection;