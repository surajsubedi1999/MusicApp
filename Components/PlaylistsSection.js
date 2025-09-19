import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { playlistsStyles } from '../styles/PlaylistsStyles';

const PlaylistsSection = () => {
  const playlistItems = [
    { title: 'Playlist User 1', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Daily Well...', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Hip-Hop C...', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: '80s Hard...', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Rock Classics', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { title: 'Chill Vibes', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <View style={playlistsStyles.section}>
      <Text style={playlistsStyles.sectionTitle}>Your Playlists</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={playlistsStyles.scrollView}>
        <View style={playlistsStyles.container}>
          {playlistItems.map((item, index) => (
            <View key={index} style={playlistsStyles.item}>
              <Image source={{uri: item.image}} style={playlistsStyles.image} />
              <Text style={playlistsStyles.text}>{item.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlaylistsSection;