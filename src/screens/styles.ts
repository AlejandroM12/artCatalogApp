import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

export const favoritesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
