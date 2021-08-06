import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const regExp = /"contentUrl":"(.{1,}?)"/;

export {SCREEN_WIDTH, SCREEN_HEIGHT, regExp};
