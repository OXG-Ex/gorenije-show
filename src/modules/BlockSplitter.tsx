import {Typography, useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";
import type {FC} from "react";

interface BlockSplitterProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}

const BlockSplitter: FC<BlockSplitterProps> = ({imgSrc, subtitle, title}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="w-full h-[25.5rem] relative  bg-gradient-to-br from-amber-800 to-transparent">
      <div
        className={clsx(
          "flex flex-col w-full h-full items-center justify-center gap-2",
          isMobile && "pl-4"
        )}
      >
        <Typography variant={isMobile ? "h4" : "h2"} fontWeight={600}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="h5">{subtitle.toUpperCase()}</Typography>
      </div>

      <img
        src={imgSrc}
        className="absolute top-0 left-0 -z-[1] w-full h-full object-cover"
      />
    </div>
  );
};

export default BlockSplitter;
