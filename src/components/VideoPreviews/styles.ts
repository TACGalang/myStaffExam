import {StyleSheet} from 'react-native';
import {thumbnailWidth} from '../../utils/utls';

const Styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 40,
      backgroundColor: '#f3f3f3',
    },
    image: {
      flex: 1,
      width: thumbnailWidth,
      height: 40,
    },
  });

export default Styles;
