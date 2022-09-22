import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Styles} from './Badge.style';

export interface BadgeProps {
  containerStyle?: ViewStyle;
  children: JSX.Element[] | JSX.Element | string;
  status: 'danger' | 'primary' | 'alert' | 'normal';
}

const styleSelector = {
  danger: Styles.dangerStyle,
  primary: Styles.primaryStyle,
  alert: Styles.alertStyle,
  normal: Styles.normalStyle,
};

const Badge = ({children, containerStyle, status}: BadgeProps): JSX.Element => {
  return (
    <View
      style={[Styles.containerStyle, styleSelector[status], containerStyle]}>
      <Text style={Styles.textLGStyle}>{children}</Text>
    </View>
  );
};

export default Badge;
