import { StyleSheet } from 'react-native';

export const playlistsStyles = StyleSheet.create({
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
  scrollView: {
    marginHorizontal: -15,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  item: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});