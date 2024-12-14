import { Platform, ViewStyle } from 'react-native';

interface ShadowProps {
  color?: string;
  opacity?: number;
  radius?: number;
  offset?: {
    width: number;
    height: number;
  };
}

export const createIOSShadow = ({
  color = '#000000',
  opacity = 0.2,
  radius = 4,
  offset = { width: 0, height: 2 },
}: ShadowProps = {}): ViewStyle => {
  if (Platform.OS !== 'ios') return {};

  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
  };
};