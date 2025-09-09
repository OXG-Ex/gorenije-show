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
import {Carousel} from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import {getImageUrl} from "../generated/allImageImports";
import {certificates} from "../generated/certificates";

export const Certificates: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div
          className={clsx(
            " items-center justify-center gap-8",
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
                  items={certificates.map((img, idx) => (
                    <CarouselItem
                      id={`${idx}-pic`}
                      original={getImageUrl(img.original)}
                      thumbnail={getImageUrl(img.min)}
                      imageClassName="h-[23rem] w-[17.5rem] shrink-0"
                    />
                  ))}
                />
              </div>
            </Gallery>
          </Paper>
        </div>
      </div>
    </Container>
  );
};
