import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Post from '../../components/Post';

const SearchResultsScreen = props => {
  const {posts} = props;

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
      <Text>Search Results</Text>
    </View>
  );
};

export default SearchResultsScreen;
