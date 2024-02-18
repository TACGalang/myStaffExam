import {useRef, useState} from 'react';
import {Dimensions, PanResponder} from 'react-native';

import Video from 'react-native-video';

export const useUIExam = () => {
  const videoDuration = useRef<number>();
  const videoRef = useRef<Video | null>();
  const windowWidth = Dimensions.get('window').width;
  const [progress, setProgress] = useState(0);
  const [isPause, setPaused] = useState<boolean>(true);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newProgress = Math.max(0, Math.min(1, gestureState.moveX / 300));
        const actualVal = (videoDuration.current ?? 0) * (newProgress / 1);
        videoRef.current?.seek(actualVal);
      },
    }),
  ).current;

  const onProgress = (currentTime: number) => {
    const progressData =
      ((currentTime / (videoDuration.current ?? 0)) * 100) / 100;
    setProgress(progressData);
  };

  const onVideoToggle = () => {
    setPaused(!isPause);
  };

  const onVideoEnd = () => {
    videoRef.current?.seek(0);
  };

  return {
    panResponder,
    progress,
    windowWidth,
    videoRef,
    videoDuration,
    onProgress,
    onVideoToggle,
    isPause,
    onVideoEnd,
  };
};
