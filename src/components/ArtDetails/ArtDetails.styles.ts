import {StyleSheet} from 'react-native';

export const artDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    marginTop: 10,
    fontSize: 18,
  },
  date: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  categories: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});
