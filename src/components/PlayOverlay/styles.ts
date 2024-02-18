import {StyleSheet} from 'react-native';

const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      pointerEvents: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -200,
      backgroundColor: 'black',
      opacity: 0.4,
    },
    image: {
      height: 40,
      width: 40,
      tintColor: 'white',
    },
  });

export default Styles;
