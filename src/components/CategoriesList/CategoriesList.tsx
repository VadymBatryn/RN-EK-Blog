import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Categories} from '../../models/categories';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './CategoriesList.style';

const CategoriesList: React.FC = ({}) => {
  const categories = ['All', ...Categories.values()];

  return (
    <View style={styles.list}>
      <FlatList
        data={categories}
        renderItem={({item}) => <CategoryCard title={item} />}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesList;
