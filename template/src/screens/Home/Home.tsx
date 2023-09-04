import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {HomeProps} from './types';
const Home = (props: HomeProps) => {
  console.log('props', props);
  return <View style={styles.container} />;
};

export default Home;
