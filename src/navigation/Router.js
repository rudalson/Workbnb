import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import PostScreen from '../screens/PostScreen';

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
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{title: '인원 수'}}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{title: 'Accomodation'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
