import {Container, Paper, Typography} from "@mui/material";
import type {FC} from "react";
import {Gallery, Item} from "react-photoswipe-gallery";
import Certificate_1min from "../assets/pictures/Certificate_1-min.jpg";
import Certificate_1 from "../assets/pictures/Certificate_1.jpg";
import Certificate_2min from "../assets/pictures/Certificate_2-min.jpg";
import Certificate_2 from "../assets/pictures/Certificate_2.jpg";
import Certificate_3min from "../assets/pictures/Certificate_3-min.jpg";
import Certificate_3 from "../assets/pictures/Certificate_3.jpg";
import Certificate_4min from "../assets/pictures/Certificate_4-min.jpeg";
import Certificate_4 from "../assets/pictures/Certificate_4.jpeg";
import Certificate_5min from "../assets/pictures/Certificate_5-min.jpg";
import Certificate_5 from "../assets/pictures/Certificate_5.jpg";
import Certificate_6min from "../assets/pictures/Certificate_6-min.jpg";
import Certificate_6 from "../assets/pictures/Certificate_6.jpg";

export const Certificates: FC = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-8">
          <Paper elevation={4} className="p-8 h-[27.75rem]">
            <div className="flex flex-col gap-7">
              <Typography variant="h4" fontWeight={600}>
                С НАМИ БЕЗОПАСНО
              </Typography>
              <Typography variant="body1">
                Мы используем только сертифицированное оборудование и
                пиротехнику,а наши сотрудники регулярно проходят инструктажи и
                обучения.
              </Typography>

              <Typography variant="body1">
                На площадках всегда работает техник, имеются средства
                пожаротушения, настилы в технической зоне и мангалы.
              </Typography>
              <Typography variant="body1">
                По запросу, мы можем привезти покрытие и для самой площадки и
                даже построить сцену для шоу
              </Typography>
            </div>
          </Paper>

          <Paper elevation={4} className=" shrink-0">
            <Gallery
              options={{
                showHideAnimationType: "zoom",
                thumbSelector: "true",
                // initialZoomLevel: "fit",
              }}
            >
              <div className="flex gap-2 p-1">
                <Item
                  id={`${1}-pic`}
                  original={Certificate_1}
                  thumbnail={Certificate_1min}
                  cropped
                >
                  {({ref, open}) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={Certificate_1min}
                      className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                    />
                  )}
                </Item>
                <Item
                  id={`${2}-pic`}
                  original={Certificate_2}
                  thumbnail={Certificate_2min}
                  cropped
                >
                  {({ref, open}) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={Certificate_2min}
                      className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                    />
                  )}
                </Item>
              </div>
            </Gallery>
          </Paper>
        </div>

        <div>
          <Gallery
            options={{
              showHideAnimationType: "zoom",
              thumbSelector: "true",
              //   initialZoomLevel: "fit",
            }}
          >
            <div className="flex gap-1">
              <Item
                id={`${3}-pic`}
                original={Certificate_3}
                thumbnail={Certificate_3min}
                cropped
              >
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_3min}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
              <Item
                id={`${4}-pic`}
                original={Certificate_4}
                thumbnail={Certificate_4min}
                cropped
              >
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_4min}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
              <Item
                id={`${5}-pic`}
                original={Certificate_5}
                thumbnail={Certificate_5min}
                cropped
              >
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_5min}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
              <Item
                id={`${6}-pic`}
                original={Certificate_6}
                thumbnail={Certificate_6min}
                cropped
              >
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_6min}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
            </div>
          </Gallery>
        </div>
      </div>
    </Container>
  );
};
