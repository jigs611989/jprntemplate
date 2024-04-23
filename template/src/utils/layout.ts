import {Dimensions, Platform} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const {width, height} = Dimensions.get('window');
export const hp = (percentage: number) =>
  Math.round((percentage * height) / 100);
export const wp = (percentage: number) =>
  Math.round((percentage * width) / 100);
export const ww = width;
export const wh = Platform.select<number>({
  android:
    Dimensions.get('screen').height - StaticSafeAreaInsets.safeAreaInsetsBottom,
  ios: Dimensions.get('window').height,
}) as number;

export const CONTENT_SPACING = 15;

const SAFE_BOTTOM =
  Platform.select({
    ios: StaticSafeAreaInsets.safeAreaInsetsBottom,
  }) ?? 0;

export const SAFE_AREA_PADDING = {
  paddingLeft: StaticSafeAreaInsets.safeAreaInsetsLeft + CONTENT_SPACING,
  paddingTop: StaticSafeAreaInsets.safeAreaInsetsTop + CONTENT_SPACING,
  paddingRight: StaticSafeAreaInsets.safeAreaInsetsRight + CONTENT_SPACING,
  paddingBottom: SAFE_BOTTOM + CONTENT_SPACING,
};
