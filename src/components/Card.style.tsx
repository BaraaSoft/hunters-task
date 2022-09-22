import {colors} from '../common/colors';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';

// export const Container = styled(View)`
//   padding: 16px;
//   align-self: stretch;
//   justify-content: center;
//   align-items: center;
//   /* flex: 1; */
//   margin-left: 44px;
//   margin-right: 44px;
//   box-shadow: 10px 10px 17px -12px rgba(0, 0, 0, 0.75);
// `;

export const Styles = StyleSheet.create({
  containerStyle: {
    height: 122,
    alignSelf: 'stretch',
    backgroundColor: colors.app.TRIP_CARD_BACKGROUND,
    borderRadius: 4,
    shadowColor: colors.main.gray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    position: 'relative',
  },
  statusContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 8,

    marginRight: '30%',
  },
  textXLStyle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.app.TEXT,
    marginBottom: 8,
  },
  textLGStyle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    color: colors.app.TEXT,
  },
  textSMStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.app.TEXT,
    alignSelf: 'flex-end',
  },
  iconStyle: {
    color: colors.main.green10,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: '5%',
    right: '4%',
  },
});
