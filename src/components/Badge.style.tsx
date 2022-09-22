import {colors} from '../common/colors';
import {View, Text, StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.main.primary,
    borderRadius: 4,
    shadowColor: colors.main.gray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 4,
    paddingVertical: 4,
    position: 'relative',
    minWidth: 100,
  },
  dangerStyle: {
    backgroundColor: colors.main.red10,
  },
  primaryStyle: {
    backgroundColor: colors.main.primary,
  },
  normalStyle: {
    backgroundColor: colors.main.teal,
  },
  alertStyle: {
    backgroundColor: colors.main.grey3,
  },

  textLGStyle: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.main.white,
    zIndex: 10,
    textTransform: 'uppercase',
  },
});
