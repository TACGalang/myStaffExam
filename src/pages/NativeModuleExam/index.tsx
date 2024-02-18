import React from 'react';
import {useNativeModuleExam} from './hook';

import {View, FlatList, ActivityIndicator} from 'react-native';
import MovieViewCell from '../../components/MovieViewCell';

import Styles from './styles';

const NativeModuleExam = () => {
  const styles = Styles();
  const {movies} = useNativeModuleExam();

  return (
    <View style={styles.container}>
      {movies?.length ?? 0 > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={movie => String(movie.id)}
          renderItem={movie => <MovieViewCell {...movie.item} />}
        />
      ) : (
        <ActivityIndicator style={styles.activityIndicator} />
      )}
    </View>
  );
};

export default NativeModuleExam;
