import React from 'react';
import {useUIExam} from './hook';

import {View, ScrollView, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import BackgroundPreview from '../../components/VideoPreviews';
import PlayOverlay from '../../components/PlayOverlay';

import {Styles} from './styles';
import {videoURL} from '../../utils/utls';

const UIExam = () => {
  const {
    panResponder,
    progress,
    windowWidth,
    videoRef,
    videoDuration,
    onProgress,
    onVideoToggle,
    isPause,
    onVideoEnd,
  } = useUIExam();
  const styles = Styles(progress);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => onVideoToggle()}
        style={styles.videoContainer}>
        <Video
          source={{uri: videoURL}}
          ref={ref => {
            videoRef.current = ref;
          }}
          resizeMode="contain"
          controls={false}
          style={styles.video}
          paused={isPause}
          onLoad={data => {
            videoDuration.current = data.duration;
          }}
          onError={error => {
            console.log('ERR: ', error);
          }}
          onProgress={data => onProgress(data.currentTime)}
          onEnd={() => onVideoEnd()}
        />
        <PlayOverlay isPause={isPause} />
      </TouchableOpacity>

      {videoDuration.current && (
        <>
          <BackgroundPreview
            videoDuration={videoDuration.current ?? 0}
            videoURL={videoURL}
            windowWidth={windowWidth}
          />
          <View style={styles.progressBar} {...panResponder.panHandlers} />
        </>
      )}
    </ScrollView>
  );
};

export default UIExam;
