import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './SearchBar.styles';
import {SearchBarProps} from '../../types';

const SearchBar: React.FC<SearchBarProps> = ({query, onQueryChange}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={onQueryChange}
      />
    </View>
  );
};

export default SearchBar;
