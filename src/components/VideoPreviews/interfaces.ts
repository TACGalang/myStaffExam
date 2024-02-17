export interface Preview {
  timeStamp: number;
  thumbnail: string | undefined;
}

export interface BackgroundPreviewProps {
  videoURL: string;
  windowWith: number;
}
