import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {CategoryCardProps} from './CategoryCardProps';
import styles from './CategoryCard.style';

import {filterPosts} from '../../store/slice/postsSlice';

const CategoryCard: React.FC<CategoryCardProps> = ({title}) => {
  const dispatch = useDispatch();

  const onPressHandle = (filter: string) => {
    dispatch(filterPosts(filter));
  };
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPressHandle(title)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
