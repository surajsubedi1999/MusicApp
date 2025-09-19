import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../Components/Header';
import TopGridButtons from '../Components/TopGridButtons';
import HotHitsGrid from '../Components/HotHitsGrid';
import MixedContentSection from '../Components/MixedContentSection';
import RecentsSection from '../Components/RecentsSection';
import PlaylistsSection from '../Components/PlaylistsSection';
import AudiobooksSection from '../Components/AudioBooksSection';
import { homeStyles } from '../styles/HomeScreenStyles';
import { headerItems } from '../data/musicData';

const HomeScreen = () => {
  const handleItemPress = (itemName) => {
    console.log(`Pressed: ${itemName}`);
    alert(`Navigating to ${itemName}`);
  };

  return (
    <ScrollView style={homeStyles.container}>
      <Header 
        onCategoryPress={handleItemPress} 
        headerItems={headerItems} 
      />
      
      <TopGridButtons onItemPress={handleItemPress} />
      <HotHitsGrid onItemPress={handleItemPress} />
      <MixedContentSection />
      <RecentsSection />
      <PlaylistsSection />
      <AudiobooksSection />
    </ScrollView>
  );
};

export default HomeScreen;