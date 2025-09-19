import { StyleSheet } from 'react-native';

export const mixedContentStyles = StyleSheet.create({
  section: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  scrollView: {
    marginHorizontal: -15,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  item: {
    width: 160,
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
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