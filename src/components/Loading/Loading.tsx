import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {LoadingProps} from '../../types';

const Loading: React.FC<LoadingProps> = ({loading, children}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
