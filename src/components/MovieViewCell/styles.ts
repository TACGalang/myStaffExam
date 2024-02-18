import {StyleSheet} from 'react-native';

const Styles = () =>
  StyleSheet.create({
    container: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomColor: 'gray',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
    },
    date: {
      fontSize: 13,
      color: '#666',
      marginBottom: 8,
    },
    description: {
      fontSize: 15,
      fontStyle: 'italic',
    },
  });

export default Styles;
