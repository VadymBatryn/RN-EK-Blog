import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './Loading.style';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#f33" />
    </View>
  );
};

export default Loading;
