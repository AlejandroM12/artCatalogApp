import React from 'react';
import {View, FlatList} from 'react-native';
import {useArt} from '../context/ArtContext';
import {favoritesScreenStyles as styles} from './styles';
import ArtCard from '../components/ArtCard/ArtCard';
import {NavigationProps} from '../types';

const FavoritesScreen: React.FC<NavigationProps> = ({navigation}) => {
  const {favorites} = useArt();

  const groupedFavorites = [];
  for (let i = 0; i < favorites.length; i += 2) {
    groupedFavorites.push([favorites[i], favorites[i + 1]]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedFavorites}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item}) => (
          <View style={styles.row}>
            {item.map(
              artwork =>
                artwork && (
                  <ArtCard
                    key={artwork.id}
                    art={artwork}
                    onPress={() =>
                      navigation.navigate('ArtDetail', {artId: artwork.id})
                    }
                  />
                ),
            )}
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
