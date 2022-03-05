import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.searchButton,
        ]}
        onPress={() => {
          console.warn('hello');
        }}>
        {({pressed}) => (
          <>
            <Fontisto name="search" size={25} color={'#f15454'} />
            <Text style={styles.searchButtonText}>Where are you going?</Text>
          </>
        )}
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/seoul-city.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Work Near</Text>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.button,
          ]}
          onPress={() => {
            console.warn('hello');
          }}>
          {({pressed}) => <Text style={styles.buttonText}>Explore nearby</Text>}
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
