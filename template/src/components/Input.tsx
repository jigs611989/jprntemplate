import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {theme} from '../theme/theme';
import {hp, wp} from '../utils/layout';
import {isTablet} from 'react-native-device-info';
import SearchIcon from '../assets/images/search.svg';

export interface InputPros extends TextInputProps {
  type: 'primary' | 'password' | 'mobile' | 'search';
  containerStyle?: ViewStyle;
  isOpen?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  dialCode?: string;
  setDialCode?: React.Dispatch<React.SetStateAction<string>>;
  setCountryCode?: React.Dispatch<React.SetStateAction<string>>;
  rightIcon?: ImageSourcePropType;
  onRightIconPress?: () => void;
  rightIconStyle?: ViewStyle;
  isError?: boolean;
  onCancel?: () => void;
  disabledAutoCap?: boolean;
}

const Input = (props: InputPros): React.JSX.Element => {
  const colors = theme.colors;
  const [show, setShow] = useState(false);

  const {
    isError,
    type,
    containerStyle,
    style,
    isOpen,
    setOpen,
    dialCode,
    setDialCode,
    setCountryCode,
    rightIcon,
    rightIconStyle,
    onRightIconPress,
    onChangeText,
    onCancel,
    disabledAutoCap: autoCapDisabled,
    ...rest
  } = props;

  return (
    <View
      style={{
        ...styles.defaultContainer,
        borderColor: isError ? colors.error : colors.border,
        ...containerStyle,
      }}>
      {type === 'mobile' && (
        <Pressable onPress={() => setShow(!show)} style={styles.dialCodeButton}>
          <Text style={theme.textVariants.small16SemiBold}>{dialCode}</Text>
          <Image
            source={require('../assets/images/signup/DownArrow.jpg')}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </Pressable>
      )}
      {type === 'search' && (
        <View
          style={{
            justifyContent: 'center',
            padding: 8,
          }}>
          <SearchIcon width={wp(3)} height={wp(3)} />
        </View>
      )}
      <TextInput
        autoCapitalize={autoCapDisabled ? 'none' : 'sentences'}
        secureTextEntry={type === 'password' && !isOpen}
        placeholderTextColor={colors.text2}
        keyboardType={type === 'mobile' ? 'phone-pad' : 'default'}
        onChangeText={onChangeText}
        style={[
          {
            ...theme.textVariants.small16SemiBold,
            width:
              type === 'password' || type === 'mobile' || type === 'search'
                ? '80%'
                : rightIcon
                ? '85%'
                : '100%',
            height: '100%',
          },
          style,
        ]}
        {...rest}
      />
      {rightIcon && (
        <TouchableOpacity
          disabled={!onRightIconPress}
          onPress={onRightIconPress}
          style={[
            {
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            rightIconStyle,
          ]}>
          <Image
            source={rightIcon}
            resizeMode="contain"
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      )}
      {!rightIcon && type === 'password' && (
        <TouchableOpacity
          onPress={() => setOpen?.(!isOpen)}
          style={{
            width: '20%',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 8,
          }}>
          <Image
            source={
              isOpen
                ? require('../assets/images/login/eye-open.png')
                : require('../assets/images/login/eye-close.png')
            }
            resizeMode="contain"
            style={{width: wp(4), height: wp(4)}}
          />
        </TouchableOpacity>
      )}
      {!rightIcon && type === 'search' && (
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            Keyboard.dismiss();
            onCancel?.();
            onChangeText?.('');
          }}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    height: hp(6.5),
    justifyContent: 'space-between',
  },
  dialCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(1),
    justifyContent: 'space-between',
    width: isTablet() ? '18%' : '23%',
    paddingLeft: wp(4),
  },
  iconStyle: {
    width: wp(3),
    height: wp(3),
    marginLeft: wp(1),
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(6),
    alignSelf: 'center',
  },
  cancelButtonText: {
    ...theme.textVariants.small16SemiBold,
    paddingHorizontal: 8,
    color: theme.colors.blue,
  },
});
export default Input;
