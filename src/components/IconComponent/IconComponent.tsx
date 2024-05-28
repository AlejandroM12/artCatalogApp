import React from 'react';
import {Image} from 'react-native';
import {IconComponentProps} from '../../types';

export const IconComponent: React.FC<IconComponentProps> = ({
  name,
  size,
  color,
}) => {
  let iconSource;

  switch (name) {
    case 'home':
      iconSource = require('../../../assets/house-regular.png');
      break;
    case 'home-solid':
      iconSource = require('../../../assets/house-solid.png');
      break;
    case 'star':
      iconSource = require('../../../assets/star-regular.png');
      break;
    case 'star-solid':
      iconSource = require('../../../assets/star-solid.png');
      break;
    default:
      iconSource = require('../../../assets/house-regular.png');
      break;
  }

  return (
    <Image
      source={iconSource}
      style={{width: size, height: size, tintColor: color}}
    />
  );
};
