import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {ArtCardProps} from '../../types';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import {useArt} from '../../context/ArtContext';
import {styles} from './ArtCard.styles';

const ArtCard: React.FC<ArtCardProps> = ({art, onPress}) => {
  const {favorites, addFavorite, removeFavorite} = useArt();
  const isFavorite = favorites.some(fav => fav.id === art.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(art.id);
    } else {
      addFavorite(art);
    }
  };

  const imageSource = art.image_id
    ? {
        uri: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
      }
    : {uri: art.thumbnail?.lqip};
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress({artId: art.id, title: art.title})}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSource} />
        <FavoriteButton
          onPress={handleFavoriteToggle}
          isFavorite={isFavorite}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {art.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {art.description || 'No description available.'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtCard;
