import { StyleSheet } from 'react-native';

export const hotHitsStyles = StyleSheet.create({
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
    width: 150,
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});