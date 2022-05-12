import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';
import keys from '../../../assets/data/keys';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="어느 지역을 원하시나요?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        fetchDetails
        style={{textInput: styles.textInput}}
        query={{
          key: keys.googlePlacesApi,
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
