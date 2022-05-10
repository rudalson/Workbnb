import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';

import {listPosts} from '../../graphql/queries';
import Post from '../../components/Post';

const SearchResultsScreen = props => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));

        setPosts(postResult.data?.listPosts.items);
        console.log('count = ', postResult.data?.listPosts.items.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
      <Text>Search Results</Text>
    </View>
  );
};

export default SearchResultsScreen;
