import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/constants';

export default StyleSheet.create({
  card: {
    flex: 1,
    width: SCREEN_WIDTH / 2.5,
    borderWidth: 1,
    borderColor: '#2874A0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2874A0',
  },
});
