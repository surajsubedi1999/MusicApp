import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  headerButtonPressed: {
    backgroundColor: '#333',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});