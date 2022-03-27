import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const SearchResultsMap = props => {
  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.50922,
          longitude: 127.04869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 37.50922,
            longitude: 127.04869,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
              borderColor: 'grey',
              borderWidth: 1,
            }}>
            <Text style={{fontWeight: 'bold'}}>₩300</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
