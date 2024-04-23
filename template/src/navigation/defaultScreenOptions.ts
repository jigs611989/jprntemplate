import {theme} from '../theme/theme';

export default {
  headerShown: false,
  cardStyle: {backgroundColor: 'transparent'},
};

export const headerDefaultOption = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontFamily: theme.textVariants.small16SemiBold.fontFamily,
    fontSize: theme.textVariants.small16SemiBold.fontSize,
    fontWeight: theme.textVariants.small16SemiBold.fontWeight,
    color: theme.textVariants.small16SemiBold.color as string,
  },
};
