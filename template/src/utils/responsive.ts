import {Dimensions} from 'react-native';
import {isTablet, scale as scaleLib} from 'react-native-size-scaling';

export const {width, height} = Dimensions.get('window');

const scale = (size: number) => {
  return isTablet ? size : scaleLib(size);
};

const verticalScale = (size: number) => {
  return scale(size);
};

const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};
