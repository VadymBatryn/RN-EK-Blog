import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import PostScrollList from '../components/PostScrollList/PostScrollList';
import {fetchPosts} from '../store/slice/postsSlice';

const BlogScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.screen}>
      <PostScrollList />
    </SafeAreaView>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
