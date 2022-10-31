import { Dimensions } from 'react-native';

const variables = {
  deviceWindowSize: Dimensions.get('window'),
  deviceScreenSize: Dimensions.get('screen'),
};

export const { deviceScreenSize, deviceWindowSize } = variables;
