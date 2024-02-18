import React from 'react';
import {useBackgroundPreview} from './hook';

import {Image, View} from 'react-native';
import {ActivityIndicator} from 'react-native';

import {BackgroundPreviewProps} from './interfaces';
import Styles from './styles';

const BackgroundPreview: React.FC<BackgroundPreviewProps> = props => {
  const {previews} = useBackgroundPreview(props);
  const styles = Styles();

  return (
    <View style={styles.container}>
      {previews ? (
        previews.map(preview => (
          <Image
            key={preview.timeStamp}
            source={{uri: preview.thumbnail}}
            style={styles.image}
          />
        ))
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default BackgroundPreview;
