import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = props => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
      <Text>Search Results</Text>
    </View>
  );
};

export default SearchResultsScreen;
