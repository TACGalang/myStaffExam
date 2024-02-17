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
import {createThumbnail} from 'react-native-create-thumbnail';
import {thumbnailWidth} from './src/utils/utls';

import {Preview} from './src/components/VideoPreviews/interfaces';

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
  const [previews, setPreviews] = useState<Preview[]>();
  const videoDuration = useRef<number>();
  const videoRef = useRef<Video | null>();
  const thumbnailIterations = useRef<number>();
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

  const videoUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getPreviews = async (stamps: number[]) => {
    const completedPreviews = await Promise.all(
      stamps.map(async stamp => {
        return await generatePreviewThumbnail(stamp);
      }),
    );

    setPreviews(completedPreviews);
  };

  const generatePreviewThumbnail = async (
    timeStamp: number,
  ): Promise<Preview> => {
    try {
      const thumbnail = await createThumbnail({
        url: videoUri,
        timeStamp,
      });

      return {timeStamp, thumbnail: thumbnail.path} as Preview;
    } catch (error) {
      return {timeStamp} as Preview;
    }
  };

  const createTimeStamps = (videoLength: number) => {
    thumbnailIterations.current = Math.trunc(windowWidth / thumbnailWidth);
    const iterations = thumbnailIterations.current ?? 1;
    const qoutient: number = videoLength / iterations;
    var stamps: number[] = [];

    for (let i = 1; i <= iterations; i++) {
      stamps.push(qoutient * i * 1000);
    }
    getPreviews(stamps);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
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
          style={{width: '100%', height: 200}}
          onLoad={data => {
            createTimeStamps(data.duration);
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
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {previews &&
            previews.map(preview => (
              <Image
                key={preview.timeStamp}
                source={{uri: preview.thumbnail}}
                style={{flex: 1, width: 70, height: 40}}
              />
            ))}
        </View>
        <View
          style={{
            width: `${progress * 100}%`,
            height: 200,
            backgroundColor: 'green',
          }}
          {...panResponder.panHandlers}
        />
      </ScrollView>
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
