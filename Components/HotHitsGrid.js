import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { hotHitsStyles } from '../styles/HotHitsStyles';

const HotHitsGrid = ({ onItemPress }) => {
  const hotHitsItems = [
    { title: 'Pop Favourites', image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: 'Hip-Hop Central', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: '80s Hard Rock', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: 'All About Country', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: 'Upbeat Mix', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: 'Daily Wellness', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: 'Rock Classics', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { title: 'Chill Vibes', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
  ];

  return (
    <View style={hotHitsStyles.section}>
      <Text style={hotHitsStyles.sectionTitle}>Hot Hits Canada</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={hotHitsStyles.scrollView}>
        <View style={hotHitsStyles.container}>
          {hotHitsItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={hotHitsStyles.item}
              onPress={() => onItemPress(item.title)}
            >
              <Image source={{uri: item.image}} style={hotHitsStyles.image} />
              <Text style={hotHitsStyles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HotHitsGrid;