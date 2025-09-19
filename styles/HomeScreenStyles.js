import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  // Top 2x3 Grid Buttons styles
  topGridSection: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  topGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topGridItem: {
    width: '30%',
    marginBottom: 10,
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topGridText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  // Grid styles for Hot Hits Canada
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  gridImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  gridText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  mixedSection: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  mixedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  mixedItem: {
    width: '48%',
    alignItems: 'center',
  },
  mixedImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  mixedText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  recentsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentItem: {
    width: '30%',
    alignItems: 'center',
  },
  recentImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  recentText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  playlistRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playlistItem: {
    width: '30%',
    alignItems: 'center',
  },
  playlistImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  playlistText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  audiobookContainer: {
    alignItems: 'center',
  },
  audiobookImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});