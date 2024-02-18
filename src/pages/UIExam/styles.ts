import {StyleSheet} from 'react-native';

export const Styles = (progress: number) =>
  StyleSheet.create({
    video: {
      width: '100%',
      height: 200,
    },
    progressBar: {
      width: `${progress * 100}%`,
      alignSelf: 'flex-start',
      height: 40,
      marginTop: -40,
      backgroundColor: '#16a9e9',
      opacity: 0.8,
    },
    container: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 8,
      height: '100%',
    },
    videoContainer: {
      width: '100%',
      height: 200,
      backgroundColor: 'black',
    },
  });
