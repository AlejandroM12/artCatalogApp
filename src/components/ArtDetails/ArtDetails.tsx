import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {ArtDetailUIProps} from '../../types';
import {artDetailStyles} from './ArtDetails.styles';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import * as Animatable from 'react-native-animatable';

const ArtDetailUI: React.FC<ArtDetailUIProps> = ({
  artwork,
  toggleLike,
  isLiked,
}) => {
  return (
    <Animatable.View
      animation="fadeInUp"
      duration={1000}
      style={artDetailStyles.container}>
      <ScrollView style={artDetailStyles.container}>
        <Image
          style={artDetailStyles.image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`,
          }}
        />
        <FavoriteButton onPress={toggleLike} isFavorite={isLiked} />
        <View style={artDetailStyles.infoContainer}>
          <Text style={artDetailStyles.title}>{artwork.title}</Text>
          <Text style={artDetailStyles.artist}>{artwork.artist_title}</Text>
          <Text style={artDetailStyles.date}>
            {artwork.place_of_origin} - {artwork.date_display}
          </Text>
          <Text style={artDetailStyles.categories}>
            {artwork.category_titles?.join(', ')}
          </Text>
          {artwork.description && (
            <Text style={artDetailStyles.description}>
              {artwork.description}
            </Text>
          )}
        </View>
      </ScrollView>
    </Animatable.View>
  );
};

export default ArtDetailUI;
