import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { recentsStyles } from '../styles/RecentsStyles';

const RecentsSection = () => {
  const recentItems = [
    { title: 'Pop mix', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=c crop&w=100&q=80' },
    { title: 'Hot Hits', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Upbeat Mix', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Chill Mix', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Rock Mix', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <View style={recentsStyles.section}>
      <Text style={recentsStyles.sectionTitle}>Recents</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={recentsStyles.scrollView}>
        <View style={recentsStyles.container}>
          {recentItems.map((item, index) => (
            <View key={index} style={recentsStyles.item}>
              <Image source={{uri: item.image}} style={recentsStyles.image} />
              <Text style={recentsStyles.text}>{item.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecentsSection;