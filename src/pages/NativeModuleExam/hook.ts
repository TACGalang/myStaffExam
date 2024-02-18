/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {NativeModules} from 'react-native';

import {Movie} from './interfaces';

const useNativeModuleExam = () => {
  const {MoviesModule} = NativeModules;
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    MoviesModule.fetchMovies((fetchedMovies: Movie[]) => {
      setMovies(fetchedMovies);
    });
  }, []);

  return {
    movies,
  };
};

export {useNativeModuleExam};
