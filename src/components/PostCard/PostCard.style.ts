import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    height: '95%',
    marginHorizontal: 15,
    width: Dimensions.get('screen').width / 1.2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
    height: '30%',
    justifyContent: 'space-between',
    marginBottom: 40,
    padding: 20,
    width: '90%',
  },
  descriptionTitle: {
    color: '#fff',
    fontSize: 20,
    maxHeight: '75%',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionInfo: {
    color: '#fff',
    fontSize: 14,
    maxWidth: '55%',
  },
});
