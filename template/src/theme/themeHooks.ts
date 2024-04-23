import {useTheme} from '@react-navigation/native';
import {Theme} from './theme';

export const useColors = () => {
  const {colors} = useTheme() as Theme;
  return colors;
};

export const useSpacing = () => {
  const {spacing} = useTheme() as Theme;
  return spacing;
};

export const useBorderRadii = () => {
  const {borderRadii} = useTheme() as Theme;
  return borderRadii;
};

export const useTextVariants = () => {
  const {textVariants} = useTheme() as Theme;
  return textVariants;
};
