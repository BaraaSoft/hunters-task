import {colors} from '../../common/colors';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Container = styled(View)`
  margin-top: 44px;
  padding: 16px;
  align-self: stretch;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  background-color: ${colors.main.white};
`;

export const Title = styled(Text)`
  font-size: 68px;
  font-weight: 900;
  text-transform: uppercase;
  color: ${colors.main.grey3};
`;

export const Link = styled(Text)`
  font-weight: 400;
  font-size: 16;
  color: ${colors.main.link};
`;

export const Styles = StyleSheet.create({
  roundedButtonContainerStyle: {
    alignSelf: 'center',
    height: 180,
    width: 180,
    backgroundColor: colors.main.white,
    shadowColor: colors.main.primary,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 100,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    border: 1,
    marginBottom: 20,
  },
  roundedButtonStyle: {
    height: 184,
    width: 184,
    shadowColor: colors.main.grey4,
    shadowOpacity: 0.7,
    shadowRadius: 3,
    borderRadius: 100,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    border: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },
  roundedButtonTextStyle: {
    fontSize: 18,
    color: colors.main.grey3,
    fontWeight: '900',
    textAlign: 'center',
    elevation: 0,
    shadowOpacity: 0,
    opacity: 0.5,
  },
  roundedButtonIconStyle: {
    paddingVertical: 12,
    color: colors.main.grey5,
  },

  containerButtonActiveStyle: {
    shadowColor: colors.main.primary,
  },
  contentButtonActiveStyle: {
    color: colors.main.primary,
  },
  containerButtonInctiveStyle: {
    shadowColor: colors.main.red10,
  },
  contentButtonInctiveStyle: {
    color: colors.main.red10,
  },
});
