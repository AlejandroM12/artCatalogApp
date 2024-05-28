import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import starRegular from '../../../assets/star-regular.png';
import starSolid from '../../../assets/star-solid.png';
import {styles} from './FavoriteButton.styles';
import * as Animatable from 'react-native-animatable';
import {FavoriteButtonProps} from '../../types';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  onPress,
  isFavorite,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isFavorite) {
      setAnimate(true);
    }
  }, [isFavorite]);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Animatable.View
        animation={animate ? 'bounceIn' : undefined}
        duration={1500}
        onAnimationEnd={handleAnimationEnd}>
        <Image
          source={isFavorite ? starSolid : starRegular}
          style={styles.icon}
        />
        {animate && isFavorite && (
          <Animatable.Text
            animation="fadeIn"
            duration={1500}
            style={styles.stars}>
            ★
          </Animatable.Text>
        )}
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
