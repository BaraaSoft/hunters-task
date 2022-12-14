import React, {useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {goTo, navigate} from '../../services/navigationService';
import {APP_SCREENS} from '../screens';
import {Container, Title, Link, Styles} from './ZoneDetails.style';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../common/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {toggleZoneStatus} from '../../store/zonesSlice.slice';

export const navigationOptions = ({navigation, route}: any) => {
  const {zoneId, zoneName} = route.params;
  return {
    headerTitle: zoneName?.toUpperCase(),
    headerShown: true,
    isVisible: false,
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back"
          style={{marginStart: 8}}
          size={24}
          color={colors.main.primary}
        />
      </TouchableOpacity>
    ),
  };
};
const TripDetails = ({navigation, route}: any) => {
  const {data, isError, loading} = useSelector(
    (state: RootState) => state.zones,
  );
  const dispatch = useDispatch();
  const {name, icon, id, status} = useMemo(() => {
    const {zoneId, zoneName} = route.params;
    return data.filter((x: any) => x.id == zoneId)[0];
  }, [route.params?.zoneId, data]);

  const handleOnPress = () => {
    dispatch(toggleZoneStatus({id}));
  };

  return (
    <Container>
      <View>
        <Title>{name}</Title>
      </View>
      <TouchableOpacity onPress={handleOnPress}>
        <View
          style={[
            Styles.roundedButtonContainerStyle,
            status.running
              ? Styles.containerButtonActiveStyle
              : Styles.containerButtonInctiveStyle,
          ]}>
          <View style={Styles.roundedButtonStyle}>
            <FontAwesome
              style={[
                Styles.roundedButtonIconStyle,
                status.running
                  ? Styles.contentButtonActiveStyle
                  : Styles.roundedButtonIconStyle,
              ]}
              name="power-off"
              size={68}
            />
            <Text
              style={[
                Styles.roundedButtonTextStyle,
                status.running
                  ? Styles.contentButtonActiveStyle
                  : Styles.roundedButtonTextStyle,
              ]}>
              {status.running ? 'ON' : 'OFF'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default TripDetails;
