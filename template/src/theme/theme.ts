import {DefaultTheme} from '@react-navigation/native';
import {PixelRatio, TextStyle} from 'react-native';
import {wp} from '../utils/layout';
import {isTablet} from 'react-native-device-info';

const palette = {
  red: '#C85E5B',
  error: '#f9422f',
  deleteBorder: '#F12E2E',
  deleteBG: '#FFEAEA',
  blue: '#0E63FC',
  bgBlue: '#ECF3FF',
  bgBlue2: '#E8F0FF',
  black: '#000000',
  white: '#FFFFFF',
  transparent: '#00000000',
  text: '#323232',
  text2: '#707070',
  icons: '#A9B2B8',
  border: '#EFEFEE',
  bg: '#F8F9FD',
  borderGray: '#D0D0D0',
  bgGray: '#F5F5F5',
  bgGray2: '#E5E5E5',
  bgGray3: '#DFDFDF',
  overlayBG: '#19225229',
  overlayBGBlack: '#00000050',
  green: '#5CE188',
  warning: '#ffcc00',
};

export const Font = {
  main: {
    bold: 'Nunito-Bold',
    light: 'Nunito-Light',
    regular: 'Nunito-Regular',
    medium: 'Nunito-Medium',
    semiBold: 'Nunito-SemiBold',
  },
};

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale + (isTablet() ? 8 : 0);

const textVariants = {
  h1: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(32),
    lineHeight: getFontSize(39),
    fontWeight: '500',
    color: palette.text,
  } as TextStyle,
  h2: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(30),
    lineHeight: getFontSize(36),
    fontWeight: '700',
    color: palette.text,
  } as TextStyle,
  h3: {
    fontFamily: Font.main.regular,
    fontWeight: '500',
    fontSize: getFontSize(24),
    lineHeight: getFontSize(29),
    color: palette.text,
  } as TextStyle,
  body20: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(20),
    lineHeight: getFontSize(22),
    fontWeight: '700',
    // letterSpacing: -0.408,
    color: palette.text,
  } as TextStyle,
  body18: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(18),
    lineHeight: getFontSize(22),
    // letterSpacing: -0.408,
    fontWeight: '400',
    color: palette.text,
  } as TextStyle,
  small16: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(16),
    lineHeight: getFontSize(22),
    // letterSpacing: -0.408,
    fontWeight: '400',
    color: palette.text,
  } as TextStyle,
  small14: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(14),
    lineHeight: getFontSize(22),
    // letterSpacing: -0.408,
    fontWeight: '500',
    color: palette.text,
  } as TextStyle,
  small12: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(12),
    lineHeight: getFontSize(18),
    // letterSpacing: -0.408,
    fontWeight: '500',
    color: palette.text,
  } as TextStyle,
  regular: {
    fontWeight: '400',
  } as TextStyle,
  medium: {
    fontFamily: Font.main.medium,
    fontWeight: '500',
  } as TextStyle,
  semiBold: {
    fontFamily: Font.main.semiBold,
    fontWeight: '600',
  } as TextStyle,
  bold: {
    fontFamily: Font.main.regular,
    fontWeight: '700',
  } as TextStyle,
  button: {
    fontFamily: Font.main.regular,
    fontSize: getFontSize(17),
    lineHeight: getFontSize(22),
    // letterSpacing: -0.408,
    fontWeight: '700',
    color: palette.white,
    textAlign: 'center',
  } as TextStyle,
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
    primaryBackground: palette.white,
    primaryMain: palette.blue,
    primaryText: palette.text,
    primaryButtonText: palette.white,
    secondaryMain: palette.icons,
    secondaryText: palette.text2,
    disabled: palette.icons,
    tooltip: palette.borderGray,
    inputPlaceholderText: palette.border,
  },
  spacing: {
    n_xxxxl: -240,
    n_xxxl: -120,
    n_xxl: -60,
    n_xl: -40,
    n_lx: -32,
    n_l: -24,
    n_lm: -20,
    n_m: -16,
    n_ms: -12,
    n_s: -8,
    n_xs: -4,
    n_xxs: -2,
    n_xxxs: -1,
    none: 0,
    xxxs: 1,
    xxs: 2,
    xs: 4,
    s: isTablet() ? wp(2) : wp(1),
    ms: wp(3),
    m: wp(4),
    lm: 20,
    l: isTablet() ? wp(4) : wp(5),
    lx: 32,
    xl: 40,
    xxl: 60,
    xxxl: 120,
    xxxxl: 240,
  },
  borderRadii: {
    none: 0,
    s: 4,
    ms: 6,
    m: 8,
    lm: 10,
    l: 12,
    lx: 16,
    xl: 20,
    round: 1000,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 400,
    tablet: 768,
  },
  textVariants: {
    ...textVariants,
    small14SemiBold: {...textVariants.small14, ...textVariants.semiBold},
    small16Bold: {...textVariants.small16, ...textVariants.bold},
    small16SemiBold: {...textVariants.small16, ...textVariants.semiBold},
    body18Bold: {...textVariants.body18, ...textVariants.bold},
    body20Bold: {...textVariants.body20, ...textVariants.bold},
    h1SemiBold: {...textVariants.h1, ...textVariants.semiBold},
    h1Bold: {...textVariants.h1, ...textVariants.bold},
    h3Bold: {...textVariants.h3, ...textVariants.bold},
  },
  inputVariants: {
    regular: {
      ...textVariants.body18,
    },
  },
};

export type Theme = typeof theme;
export type TextVariant = keyof Theme['textVariants'];
export type Spacing = keyof Theme['spacing'];
export type Colors = keyof Theme['colors'];
