import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  BlogStackScreenTypes,
  DetailsScreenNavigationProp,
} from '../../navigation/BlogAppNavigation';

import styles from './PostCard.style';
import {PostCardProps} from './PostCardProps';
import {Categories} from '../../models/categories';

const PostCard: React.FC<PostCardProps> = ({
  title,
  date,
  category,
  imageUrl,
  renderData,
}) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const transformedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const onPressHandler = () => {
    if (imageUrl) {
      navigation.navigate(BlogStackScreenTypes.Details, {
        renderData: renderData,
        imageUrl: imageUrl,
      });
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPressHandler}>
      <ImageBackground source={{uri: imageUrl}} style={styles.image}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{title}</Text>
          <View style={styles.info}>
            <Text style={styles.descriptionInfo}>
              {Categories.get(category)}
            </Text>
            <Text style={styles.descriptionInfo}>{transformedDate}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PostCard;
