import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../../theme/colors';
import {NAVIGATION} from '../../constants/Navigation';
import HomeScreen from '../../screens/HomeScreen';
import ArtDetailScreen from '../../screens/ArtDetailScreen';
import {ParamListType} from '../../types';

const Stack = createStackNavigator<ParamListType>();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.placeholder,
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }}>
    <Stack.Screen
      name={NAVIGATION.HOME_SCREEN}
      component={HomeScreen}
      options={{title: 'Home'}}
    />
    <Stack.Screen
      name={NAVIGATION.ART_DETAIL}
      component={ArtDetailScreen}
      options={({route}) => ({
        title: route.params?.title || 'Art Detail',
      })}
    />
  </Stack.Navigator>
);

export default HomeStack;
