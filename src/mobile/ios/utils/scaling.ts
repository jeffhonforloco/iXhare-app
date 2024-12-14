import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base dimensions for iPhone 11 Pro
const baseWidth = 375;
const baseHeight = 812;

export const scale = (size: number) => (width / baseWidth) * size;
export const verticalScale = (size: number) => (height / baseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => 
  size + (scale(size) - size) * factor;