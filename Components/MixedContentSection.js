import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { mixedContentStyles } from '../styles/MixedContentStyles';

const MixedContentSection = () => {
  const mixedItems = [
    { title: 'All About Country', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80' },
    { title: 'Upbeat mix', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80' },
    { title: 'Daily Wellness', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80' },
    { title: 'Release Radar', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80' },
    { title: 'Workout Mix', image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80' },
  ];

  return (
    <View style={mixedContentStyles.section}>
      
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={mixedContentStyles.scrollView}>
      <View style={mixedContentStyles.container}>
        {mixedItems.map((item, index) => (
          <View key={index} style={mixedContentStyles.item}>
            <Image source={{uri: item.image}} style={mixedContentStyles.image} />
            <Text style={mixedContentStyles.text}>{item.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
  );
};

export default MixedContentSection;