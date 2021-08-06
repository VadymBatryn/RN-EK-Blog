import React from 'react';
import {useSelector} from 'react-redux';
import {View, FlatList, Text} from 'react-native';

import {RootState} from '../../store/configureStore';
import PostCard from '../PostCard/PostCard';
import styles from './PostScrollList.style';
import Loading from '../Loading/Loading';
import CategoriesList from '../CategoriesList/CategoriesList';

const PostScrollList: React.FC = () => {
  const regExp = /"contentUrl":"(.{1,}?)"/;
  const data = useSelector((state: RootState) => state.blog.filteredPosts);

  if (!data.length) {
    return <Loading />;
  }

  return (
    <View style={styles.list}>
      <Text style={styles.title}>eKreative Blog</Text>
      <CategoriesList />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PostCard
            title={item.title.rendered}
            date={item.date}
            category={item.categories[0]}
            imageUrl={item.yoast_head.match(regExp)?.[1] + ''}
            renderData={item.content.rendered}
          />
        )}
        horizontal
        refreshing={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default PostScrollList;
