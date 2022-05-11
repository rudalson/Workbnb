import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';

import {listPosts} from '../../graphql/queries';
import Post from '../../components/Post';

const SearchResultsScreen = props => {
  const [posts, setPosts] = React.useState([]);
  const {guests} = props;

  console.log({props});

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxGuests: {
                ge: guests,
              },
            },
          }),
        );

        setPosts(postResult.data?.listPosts.items);
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
