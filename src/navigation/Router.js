import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{title: '목적지를 정하세요'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
