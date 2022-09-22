import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './stacks/MainStack';
import ZoneStack from './stacks/ZoneStack';

const RootStack = createStackNavigator();

const StackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="HomeScreen">
      <RootStack.Screen
        component={MainStack}
        name="MainStack"
        options={{headerShown: false}}
      />
      <RootStack.Screen
        component={ZoneStack}
        name="ZoneStack"
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
