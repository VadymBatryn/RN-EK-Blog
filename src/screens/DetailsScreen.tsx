import React from 'react';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import {DetailsProps} from '../navigation/BlogAppNavigation';
import RenderHTML from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '../constants/constants';

const DetailsScreen: React.FC<DetailsProps> = ({route}) => {
  const {renderData, imageUrl} = route.params;

  const htmlData = {
    html: renderData,
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <RenderHTML
          contentWidth={SCREEN_WIDTH}
          source={htmlData}
          tagsStyles={styles}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {width: '100%', height: 300},
  p: {
    fontSize: 20,
    color: '#555',
  },
  a: {
    color: '#283f94',
    borderBottomWidth: 10,
  },
  h2: {
    fontSize: 30,
    fontWeight: '700',
    color: '#435b97',
    marginTop: 20,
    marginBottom: 15,
  },
  h3: {
    fontSize: 24,
    fontWeight: '500',
  },
  img: {
    height: 'auto',
  },
});
