import React from 'react';
import {Text, View} from 'react-native';

import {Movie} from '../../pages/NativeModuleExam/interfaces';
import Styles from './styles';

const MovieViewCell: React.FC<Movie> = ({title, date, description}) => {
  const styles = Styles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default MovieViewCell;
