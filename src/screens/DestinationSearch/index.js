import React from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = React.useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => {
              navigation.navigate('Guests');
            }}>
            {({pressed}) => (
              <>
                <View style={styles.iconContainer}>
                  <Entypo name={'location-pin'} size={30} />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
              </>
            )}
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
