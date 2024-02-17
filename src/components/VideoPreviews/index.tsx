import {Text, View} from 'react-native';
import React from 'react';
import {useBackgroundPreview} from './hook';

import {BackgroundPreviewProps} from './interfaces';
import styles from './styles';

const BackgroundPreview: React.FC<BackgroundPreviewProps> = ({
  videoURL,
  windowWith,
}) => {
  return (
    <View>
      <Text>ProgressBar</Text>
    </View>
  );
};

export default BackgroundPreview;
