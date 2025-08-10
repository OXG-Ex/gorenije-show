import type {FC} from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({src}) => {
  return (
    <ReactPlayer
      src={src}
      muted
      controls
      className="w-full"
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
