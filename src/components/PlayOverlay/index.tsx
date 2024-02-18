import React from 'react';
import {Image, View} from 'react-native';

import Styles from './styles';

interface Props {
  isPause: boolean;
}

const PlayOverlay: React.FC<Props> = ({isPause}) => {
  const styles = Styles();

  return (
    <>
      {isPause && (
        <View style={styles.container}>
          <Image
            source={require('../../assets/play-svgrepo-com.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
    </>
  );
};

export default PlayOverlay;
