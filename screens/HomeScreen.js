import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import { homeStyles } from '../styles/HomeScreenStyles';
import { 
  headerItems,
  hotHitsGridItems,
  topGridItems
} from '../data/musicData';

const HomeScreen = () => {
  const handleItemPress = (itemName) => {
    console.log(`Pressed: ${itemName}`);
    alert(`Navigating to ${itemName}`);
  };

  // Top 2x3 Grid Buttons Component
  const TopGridButtons = () => {
    return (
      <View style={homeStyles.topGridSection}>
        <View style={homeStyles.topGridContainer}>
          {topGridItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={homeStyles.topGridItem}
              onPress={() => handleItemPress(item.title)}
            >
              <Text style={homeStyles.topGridText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  // Hot Hits Canada 2x3 Grid Component
  const HotHitsGrid = () => {
    return (
      <View style={homeStyles.section}>
        <Text style={homeStyles.sectionTitle}>Hot Hits Canada</Text>
        <View style={homeStyles.gridContainer}>
          {hotHitsGridItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={homeStyles.gridItem}
              onPress={() => handleItemPress(item.title)}
            >
              <Image 
                source={{uri: item.image}} 
                style={homeStyles.gridImage}
              />
              <Text style={homeStyles.gridText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={homeStyles.container}>
      <Header 
        onCategoryPress={handleItemPress} 
        headerItems={headerItems} 
      />
      
      
      <TopGridButtons />
      
   
      <HotHitsGrid />
      
      {/* Rest of the content remains the same */}
      <View style={homeStyles.mixedSection}>
        <View style={homeStyles.mixedRow}>
          <View style={homeStyles.mixedItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80'}}
              style={homeStyles.mixedImage}
            />
            <Text style={homeStyles.mixedText}>All About Country</Text>
          </View>
          <View style={homeStyles.mixedItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80'}}
              style={homeStyles.mixedImage}
            />
            <Text style={homeStyles.mixedText}>Upbeat mix</Text>
          </View>
        </View>
        
        <View style={homeStyles.mixedRow}>
          <View style={homeStyles.mixedItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80'}}
              style={homeStyles.mixedImage}
            />
            <Text style={homeStyles.mixedText}>Daily Wellness</Text>
          </View>
          <View style={homeStyles.mixedItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=160&q=80'}}
              style={homeStyles.mixedImage}
            />
            <Text style={homeStyles.mixedText}>Release Radar</Text>
          </View>
        </View>
      </View>

      {/* Recents Section */}
      <View style={homeStyles.section}>
        <Text style={homeStyles.sectionTitle}>Recents</Text>
        <View style={homeStyles.recentsRow}>
          <View style={homeStyles.recentItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.recentImage}
            />
            <Text style={homeStyles.recentText}>Pop mix</Text>
          </View>
          <View style={homeStyles.recentItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.recentImage}
            />
            <Text style={homeStyles.recentText}>Hot Hits</Text>
          </View>
          <View style={homeStyles.recentItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.recentImage}
            />
            <Text style={homeStyles.recentText}>Upbeat Mix</Text>
          </View>
        </View>
      </View>

      {/* Playlists Sections */}
      <View style={homeStyles.section}>
        <Text style={homeStyles.sectionTitle}>PlayLists</Text>
        <View style={homeStyles.playlistRow}>
          <View style={homeStyles.playlistItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.playlistImage}
            />
            <Text style={homeStyles.playlistText}>Favourites</Text>
          </View>
          <View style={homeStyles.playlistItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.playlistImage}
            />
            <Text style={homeStyles.playlistText}>Playlist User 1</Text>
          </View>
          <View style={homeStyles.playlistItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.playlistImage}
            />
            <Text style={homeStyles.playlistText}>Playlist User 2</Text>
          </View>
        </View>
      </View>

      <View style={homeStyles.section}>
        <View style={homeStyles.playlistRow}>
          <View style={homeStyles.playlistItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.playlistImage}
            />
            <Text style={homeStyles.playlistText}>Daily Well...</Text>
          </View>
          <View style={homeStyles.playlistItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'}}
              style={homeStyles.playlistImage}
            />
            <Text style={homeStyles.playlistText}>Hip-Hop C...</Text>
          </View>
          <View style={homeStyles.playlistItem}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=c crop&w=100&q=80'}}
              style={homeStyles.playlistImage}
            />
            <Text style={homeStyles.playlistText}>80s Hard...</Text>
          </View>
        </View>
      </View>

      
      {/* Audiobooks Section */}
      <View style={homeStyles.section}>
        <Text style={homeStyles.sectionTitle}>Audiobooks for you</Text>
        <View style={homeStyles.audiobookContainer}>
          <Image 
            source={{uri: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'}}
            style={homeStyles.audiobookImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;