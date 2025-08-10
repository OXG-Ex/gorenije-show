import {Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";
import type {FC} from "react";
import topImage from "../assets/pictures/fireshow/topImage-min.jpg";

export const TopPictureWithText: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div
        className={clsx(
          "flex justify-between bg-gradient-to-br from-amber-500 to-transparent",
          isMobile && "flex-col-reverse"
        )}
      >
        <div
          className={clsx(
            " flex flex-col gap-4 items-center justify-center",
            isMobile ? "w-[100vw] h-[50vh]" : "w-[50vw] h-[100vh]"
          )}
        >
          <div className="flex flex-col gap-2">
            <Typography
              variant={isMobile ? "h4" : "h2"}
              fontWeight={600}
              className={clsx("w-min", isMobile && "text-center")}
            >
              СДЕЛАЙТЕ ВАШ ПРАЗДНИК НЕЗАБЫВАЕМЫМ
            </Typography>

            <Typography
              variant={isMobile ? "h6" : "h4"}
              fontWeight={400}
              className={clsx(isMobile && "text-center")}
            >
              С КОМАНДОЙ ПРОФЕССИОНАЛОВ
            </Typography>
          </div>

          <Button onClick={() => alert("УЗНАТЬ СТОИМОСТЬ")}>
            УЗНАТЬ СТОИМОСТЬ
          </Button>
        </div>
        <div
          className={clsx(
            isMobile ? "w-[100vw] h-[50vh]" : "w-[50vw] h-[100vh]"
          )}
        ></div>
      </div>
      <img
        src={topImage}
        className="absolute top-0 left-0 -z-[1] w-full h-[100vh] object-cover"
      />
    </>
  );
};
