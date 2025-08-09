import {Button, Typography} from "@mui/material";
import type {FC} from "react";

export const TopPictureWithText: FC = () => {
  return (
    <>
      <div className="flex justify-between bg-gradient-to-br from-yellow-300 to-transparent">
        <div className="w-[50vw] h-[100vh] flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-2">
            <Typography variant="h2" fontWeight={600} className="w-min">
              СДЕЛАЙТЕ ВАШ ПРАЗДНИК НЕЗАБЫВАЕМЫМ
            </Typography>

            <Typography variant="h4" fontWeight={400} className="">
              С КОМАНДОЙ ПРОФЕССИОНАЛОВ
            </Typography>
          </div>

          <Button onClick={() => alert("УЗНАТЬ СТОИМОСТЬ")}>
            УЗНАТЬ СТОИМОСТЬ
          </Button>
        </div>
        <div className="w-[50vw] h-[100vh]"></div>
      </div>
      <img
        src="/public/pictures/DSC_3832.jpg "
        className="absolute top-0 left-0 -z-[1] w-full h-[100vh] object-cover"
      />
    </>
  );
};
