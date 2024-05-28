import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const pickerSelectStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    height: 40,
    borderColor: colors.placeholder,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: colors.text,
    paddingRight: 30,
  },
  inputAndroid: {
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: colors.placeholder,
    borderRadius: 8,
    color: colors.text,
    paddingRight: 30,
  },
});
