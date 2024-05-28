import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View} from 'react-native';
import {pickerSelectStyles} from './CategoryPicker.styles';
import {DropdownPickerProps} from '../../types';

const CategoryPicker: React.FC<DropdownPickerProps> = ({
  selectedValue,
  onValueChange,
  items,
}) => {
  const formattedItems = items.map(item => ({
    ...item,
    key: item.key || item.label,
  }));
  return (
    <View style={pickerSelectStyles.container}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={formattedItems}
        style={pickerSelectStyles}
        value={selectedValue}
        placeholder={{label: 'Select a category', value: ''}}
      />
    </View>
  );
};

export default CategoryPicker;
