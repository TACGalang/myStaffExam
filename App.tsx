/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  PanResponder,
} from 'react-native';
import Video from 'react-native-video';

import {Preview} from './src/components/VideoPreviews/interfaces';

import BackgroundPreview from './src/components/VideoPreviews';
import UIExam from './src/pages/UIExam';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const videoDuration = useRef<number>();
  const videoRef = useRef<Video | null>();

  const windowWidth = Dimensions.get('window').width;
  const [progress, setProgress] = useState(0.2);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // Calculate the new progress based on gesture state
        const newProgress = Math.max(0, Math.min(1, gestureState.moveX / 300));
        setProgress(newProgress);
        const actualVal = (videoDuration.current ?? 0) * (newProgress / 1);
        videoRef.current?.seek(actualVal);
      },
    }),
  ).current;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexGrow: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <UIExam />
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Video
          source={{uri: videoUri}}
          ref={ref => {
            videoRef.current = ref;
          }}
          resizeMode="contain"
          controls={true}
          style={}
          onLoadStart={() => {
            console.log('load start');
          }}
          onLoad={data => {
            videoDuration.current = data.duration;
            console.log('witdh', data.naturalSize.width);
            console.log('window width', windowWidth);
          }}
          onProgress={data => {
            const progressData =
              ((data.currentTime / (videoDuration.current ?? 0)) * 100) / 100;
            setProgress(progressData);
          }}
        />
        {videoDuration.current && (
          <BackgroundPreview
            videoDuration={videoDuration.current ?? 0}
            videoURL={videoUri}
            windowWidth={windowWidth}
          />
        )}

        <View
          style={{
            width: `${progress * 100}%`,
            height: 200,
            backgroundColor: 'green',
          }}
          {...panResponder.panHandlers}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
