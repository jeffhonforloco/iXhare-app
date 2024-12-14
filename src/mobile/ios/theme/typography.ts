import { Platform } from 'react-native';
import { moderateScale } from '../utils/scaling';

export const typography = {
  largeTitle: {
    fontSize: moderateScale(34),
    lineHeight: moderateScale(41),
    letterSpacing: 0.37,
    fontWeight: '700',
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  title1: {
    fontSize: moderateScale(28),
    lineHeight: moderateScale(34),
    letterSpacing: 0.36,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  title2: {
    fontSize: moderateScale(22),
    lineHeight: moderateScale(28),
    letterSpacing: 0.35,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  title3: {
    fontSize: moderateScale(20),
    lineHeight: moderateScale(25),
    letterSpacing: 0.38,
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  body: {
    fontSize: moderateScale(17),
    lineHeight: moderateScale(22),
    letterSpacing: -0.41,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  callout: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(21),
    letterSpacing: -0.32,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  subhead: {
    fontSize: moderateScale(15),
    lineHeight: moderateScale(20),
    letterSpacing: -0.24,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  footnote: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(18),
    letterSpacing: -0.08,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  caption1: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    letterSpacing: 0,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
  caption2: {
    fontSize: moderateScale(11),
    lineHeight: moderateScale(13),
    letterSpacing: 0.07,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
    }),
  },
};