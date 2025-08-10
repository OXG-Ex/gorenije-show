import {
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import clsx from "clsx";
import type {FC} from "react";
import {Gallery} from "react-photoswipe-gallery";
import Certificate_1min from "../assets/pictures/certificates/Certificate_1-min.jpg";
import Certificate_1 from "../assets/pictures/certificates/Certificate_1.jpg";
import Certificate_2min from "../assets/pictures/certificates/Certificate_2-min.jpg";
import Certificate_2 from "../assets/pictures/certificates/Certificate_2.jpg";
import Certificate_3min from "../assets/pictures/certificates/Certificate_3-min.jpg";
import Certificate_3 from "../assets/pictures/certificates/Certificate_3.jpg";
import Certificate_4min from "../assets/pictures/certificates/Certificate_4-min.jpeg";
import Certificate_4 from "../assets/pictures/certificates/Certificate_4.jpeg";
import Certificate_5min from "../assets/pictures/certificates/Certificate_5-min.jpg";
import Certificate_5 from "../assets/pictures/certificates/Certificate_5.jpg";
import Certificate_6min from "../assets/pictures/certificates/Certificate_6-min.jpg";
import Certificate_6 from "../assets/pictures/certificates/Certificate_6.jpg";
import {Carousel} from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

export const Certificates: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div
          className={clsx(
            "flex items-center justify-center gap-8",
            isMobile && "flex-col"
          )}
        >
          <Paper elevation={4} className="p-8 ">
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

          <Paper elevation={4} className="h-[23rem]">
            <Gallery
              options={{
                showHideAnimationType: "zoom",
                thumbSelector: "true",
                // initialZoomLevel: "fit",
              }}
            >
              <div className="flex gap-2 p-1">
                <Carousel
                  disableButtons
                  items={[
                    <CarouselItem
                      id={`${1}-pic`}
                      original={Certificate_1}
                      thumbnail={Certificate_1min}
                      imageClassName="h-[23rem] w-[17.5rem] shrink-0"
                    />,
                    <CarouselItem
                      id={`${2}-pic`}
                      original={Certificate_2}
                      thumbnail={Certificate_2min}
                      imageClassName="h-[23rem] w-[17.5rem]"
                    />,
                    <CarouselItem
                      id={`${3}-pic`}
                      original={Certificate_3}
                      thumbnail={Certificate_3min}
                      imageClassName="h-[23rem] w-[17.5rem]"
                    />,
                    <CarouselItem
                      id={`${4}-pic`}
                      original={Certificate_4}
                      thumbnail={Certificate_4min}
                      imageClassName="h-[23rem] w-[17.5rem]"
                    />,
                    <CarouselItem
                      id={`${5}-pic`}
                      original={Certificate_5}
                      thumbnail={Certificate_5min}
                      imageClassName="h-[23rem] w-[17.5rem]"
                    />,
                    <CarouselItem
                      id={`${6}-pic`}
                      original={Certificate_6}
                      thumbnail={Certificate_6min}
                      imageClassName="h-[23rem] w-[17.5rem]"
                    />,
                  ]}
                />
              </div>
            </Gallery>
          </Paper>
        </div>
      </div>
    </Container>
  );
};
