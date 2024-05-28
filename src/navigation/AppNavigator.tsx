import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NAVIGATION} from '../constants/Navigation';
import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';
import {IconComponent} from '../components/IconComponent/IconComponent';
import {colors} from '../theme/colors';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === NAVIGATION.HOME) {
              iconName = focused ? 'home-solid' : 'home';
            } else if (route.name === NAVIGATION.FAVORITES) {
              iconName = focused ? 'star-solid' : 'star';
            }

            return (
              <IconComponent
                name={iconName || 'home'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name={NAVIGATION.HOME} component={HomeStack} />
        <Tab.Screen name={NAVIGATION.FAVORITES} component={FavoritesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
