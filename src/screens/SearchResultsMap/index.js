import React from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = props => {
  const {posts} = props;

  const [selectedPlaceId, setSelectedPlaceId] = React.useState(null);

  const flatlist = React.useRef();
  const viewConfig = React.useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = React.useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  const map = React.useRef();

  const width = useWindowDimensions().width;

  React.useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.50922,
          longitude: 127.04869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {posts.map(place => (
          <CustomMarker
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
