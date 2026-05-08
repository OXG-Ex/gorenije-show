import {useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";
import type {FC} from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
  previewSrc: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({src, previewSrc}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ReactPlayer
      src={src}
      muted
      controls
      className={clsx("w-full", isMobile ? "h-[175px]" : "h-[610px]")}
      width="100%"
      height={isMobile ? "175px" : "610px"}
      light={
        <img
          src={previewSrc}
          alt="Thumbnail"
          className={clsx(
            "w-full object-cover",
            isMobile ? "h-[175px]" : "h-[610px]",
          )}
        />
      }
    />
  );
};

export default VideoPlayer;
