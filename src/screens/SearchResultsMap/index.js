import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = props => {
  const [selectedPlaceId, setSelectedPlaceId] = React.useState(null);
  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.50922,
          longitude: 127.04869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 40}}>
        <PostCarouselItem post={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
