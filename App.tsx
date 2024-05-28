import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {ArtProvider} from './src/context/ArtContext';
import notifee, {AuthorizationStatus} from '@notifee/react-native';

const App: React.FC = () => {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
        console.warn('Notification permissions denied');
      }
    };

    requestNotificationPermission();
  }, []);

  return (
    <ArtProvider>
      <AppNavigator />
    </ArtProvider>
  );
};

export default App;
