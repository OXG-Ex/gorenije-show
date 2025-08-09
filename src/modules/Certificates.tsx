import {Container, Paper, Typography} from "@mui/material";
import type {FC} from "react";
import {Gallery, Item} from "react-photoswipe-gallery";
import Certificate_1 from "../assets/pictures/Certificate_1.jpg";
import Certificate_2 from "../assets/pictures/Certificate_2.jpg";
import Certificate_3 from "../assets/pictures/Certificate_3.jpg";
import Certificate_4 from "../assets/pictures/Certificate_4.jpeg";
import Certificate_5 from "../assets/pictures/Certificate_5.jpg";
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
                <Item id={`${1}-pic`} original={Certificate_1} cropped>
                  {({ref, open}) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={Certificate_1}
                      className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                    />
                  )}
                </Item>
                <Item id={`${2}-pic`} original={Certificate_2} cropped>
                  {({ref, open}) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={Certificate_2}
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
              <Item id={`${3}-pic`} original={Certificate_3} cropped>
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_3}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
              <Item id={`${4}-pic`} original={Certificate_4} cropped>
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_4}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
              <Item id={`${5}-pic`} original={Certificate_5} cropped>
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_5}
                    className="h-[25rem] w-[17.5rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
                  />
                )}
              </Item>
              <Item id={`${6}-pic`} original={Certificate_6} cropped>
                {({ref, open}) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Certificate_6}
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
