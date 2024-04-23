import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {theme} from '../theme/theme';
import {hp} from '../utils/layout';

export interface ButtonPros extends TouchableOpacityProps {
  isLoading?: boolean;
  type: 'primary' | 'secondary' | 'regular' | 'primaryGrey' | 'primaryRed';
  title: string;
  icon?: ImageSourcePropType;
  textStyle?: TextStyle;
}

const Button = (props: ButtonPros): React.JSX.Element => {
  const colors = theme.colors;
  const {
    icon,
    isLoading = false,
    title,
    type,
    textStyle,
    style,
    ...rest
  } = props;
  let buttonTextColor = colors.white;
  let buttonBGColor = colors.blue;
  switch (type) {
    case 'primaryGrey':
      buttonTextColor = colors.black;
      buttonBGColor = colors.bgGray;
      break;
    case 'primaryRed':
      buttonTextColor = colors.error;
      buttonBGColor = colors.bgGray;
      break;
    case 'secondary':
      buttonTextColor = colors.blue;
      buttonBGColor = colors.transparent;
      break;
    case 'regular':
      buttonTextColor = colors.blue;
      buttonBGColor = colors.transparent;
      break;
  }
  return (
    <TouchableOpacity
      style={[
        {
          height: hp(6),
          borderRadius: hp(3),
          borderWidth:
            type === 'regular' ||
            type === 'primaryGrey' ||
            type === 'primaryRed'
              ? 0
              : 1,
          borderColor: colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
          backgroundColor: buttonBGColor,
        },
        style,
      ]}
      {...rest}>
      {isLoading && <ActivityIndicator color={buttonTextColor} size="small" />}
      {icon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={{width: hp(3), height: hp(3), marginHorizontal: 8}}
        />
      )}
      <Text
        adjustsFontSizeToFit={true}
        style={[
          {
            ...theme.textVariants.small16SemiBold,
            color: buttonTextColor,
            marginLeft: isLoading ? 16 : 0,
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
