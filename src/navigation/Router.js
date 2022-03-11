import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{title: '원하는 지역을 검색하세요'}}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{title: '인원수 선택'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
