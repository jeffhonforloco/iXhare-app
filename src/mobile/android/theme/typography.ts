import { Platform } from 'react-native';

export const materialTypography = {
  h1: {
    fontFamily: Platform.select({ android: 'Roboto-Light' }),
    fontSize: 96,
    letterSpacing: -1.5,
    fontWeight: '300',
  },
  h2: {
    fontFamily: Platform.select({ android: 'Roboto-Light' }),
    fontSize: 60,
    letterSpacing: -0.5,
    fontWeight: '300',
  },
  h3: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 48,
    letterSpacing: 0,
    fontWeight: '400',
  },
  h4: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 34,
    letterSpacing: 0.25,
    fontWeight: '400',
  },
  h5: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 24,
    letterSpacing: 0,
    fontWeight: '400',
  },
  h6: {
    fontFamily: Platform.select({ android: 'Roboto-Medium' }),
    fontSize: 20,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
  subtitle1: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: '400',
  },
  subtitle2: {
    fontFamily: Platform.select({ android: 'Roboto-Medium' }),
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
  body1: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: '400',
  },
  body2: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: '400',
  },
  button: {
    fontFamily: Platform.select({ android: 'Roboto-Medium' }),
    fontSize: 14,
    letterSpacing: 1.25,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: '400',
  },
  overline: {
    fontFamily: Platform.select({ android: 'Roboto-Regular' }),
    fontSize: 10,
    letterSpacing: 1.5,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
};