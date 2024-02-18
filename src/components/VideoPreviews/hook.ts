/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {createThumbnail} from 'react-native-create-thumbnail';

import {BackgroundPreviewProps, Preview} from './interfaces';
import {thumbnailWidth} from '../../utils/utls';

export const useBackgroundPreview = ({
  windowWidth,
  videoDuration,
  videoURL,
}: BackgroundPreviewProps) => {
  const [previews, setPreviews] = useState<Preview[]>();

  useEffect(() => {
    createCompletePreviews();
  }, []);

  const createCompletePreviews = async () => {
    const stamps = generateTimeStamps();
    const generatedPreviews = await generatePreviews(stamps);

    setPreviews(generatedPreviews);
  };

  const generateTimeStamps = (): number[] => {
    const iterations: number = Math.trunc(windowWidth / thumbnailWidth);
    const qoutient: number = videoDuration / iterations;
    var stamps: number[] = [];

    for (let i = 1; i <= iterations; i++) {
      stamps.push(qoutient * i * 1000);
    }

    return stamps;
  };

  const generatePreviews = async (stamps: number[]): Promise<Preview[]> => {
    const completedPreviews = await Promise.all(
      stamps.map(async stamp => {
        return await generatePreviewThumbnail(stamp);
      }),
    );

    return completedPreviews.filter(preview => preview.thumbnail);
  };

  const generatePreviewThumbnail = async (
    timeStamp: number,
  ): Promise<Preview> => {
    try {
      const thumbnail = await createThumbnail({
        url: videoURL,
        timeStamp,
      });

      return {timeStamp, thumbnail: thumbnail.path} as Preview;
    } catch (error) {
      return {timeStamp} as Preview;
    }
  };

  return {previews};
};
