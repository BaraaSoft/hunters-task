import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREENS} from '../../screens/screens';
import TripScreen from '../../screens/zone/Zone';
import TripDetailsScreen, {
  navigationOptions,
} from '../../screens/zoneDetails/ZoneDetails';

const Stack = createStackNavigator();

const ZoneStack = () => {
  return (
    <Stack.Navigator initialRouteName={APP_SCREENS.ZoneScreen}>
      <Stack.Screen
        name={APP_SCREENS.ZoneScreen}
        component={TripScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={APP_SCREENS.ZoneDetailsScreen}
        component={TripDetailsScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

export default ZoneStack;
