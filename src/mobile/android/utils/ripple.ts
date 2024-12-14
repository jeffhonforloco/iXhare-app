import { Platform } from 'react-native';

interface RippleProps {
  color?: string;
  borderless?: boolean;
  radius?: number;
}

export const createRipple = ({
  color = 'rgba(0, 0, 0, 0.12)',
  borderless = false,
  radius,
}: RippleProps = {}) => {
  if (Platform.OS !== 'android') return {};

  return {
    android_ripple: {
      color,
      borderless,
      radius,
    },
  };
};