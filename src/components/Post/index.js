import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyA8CvOs7xWhakFRoIYpK0OZ-ybhZ3joVQjg&usqp=CAU',
        }}
      />
      <Text style={styles.office}>100인 이하 사무실</Text>
      <Text style={styles.description} numberOfLines={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₩100</Text>
        <Text style={styles.price}> ₩120</Text> / 월
      </Text>

      <Text style={styles.totalPrice}>총 800</Text>
    </View>
  );
};

export default Post;
