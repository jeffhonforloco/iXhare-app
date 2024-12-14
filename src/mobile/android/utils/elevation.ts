import { Platform, ViewStyle } from 'react-native';

interface ElevationProps {
  elevation: number;
}

export const createElevation = ({ elevation }: ElevationProps): ViewStyle => {
  if (Platform.OS !== 'android') return {};

  return {
    elevation,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: elevation / 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: elevation / 2,
  };
};