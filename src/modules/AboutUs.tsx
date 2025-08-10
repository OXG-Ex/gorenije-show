import {
  Button,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type {FunctionComponent} from "react";
import AboutUs1 from "../assets/pictures/aboutUs/aboutUs_1.png";
import AboutUs2 from "../assets/pictures/aboutUs/aboutUs_2.png";
import AboutUs3 from "../assets/pictures/aboutUs/aboutUs_3.jpg";
import AboutUs4 from "../assets/pictures/aboutUs/aboutUs_4.png";

import clsx from "clsx";
import AboutUs1min from "../assets/pictures/aboutUs/aboutUs_1-min.png";
import AboutUs2min from "../assets/pictures/aboutUs/aboutUs_2-min.png";
import AboutUs3min from "../assets/pictures/aboutUs/aboutUs_3-min.jpg";
import AboutUs4min from "../assets/pictures/aboutUs/aboutUs_4-min.png";
import {Gallery} from "../components/Gallery";

export const AboutUs: FunctionComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <div
        className={clsx(
          "flex items-center justify-center gap-8",
          isMobile && "flex-col"
        )}
      >
        <Paper
          elevation={4}
          className="grid grid-cols-2 grid-rows-2 p-6 gap-x-3 gap-y-3 shrink-0"
        >
          <Gallery
            items={[
              {original: AboutUs1, thumbnail: AboutUs1min},
              {original: AboutUs2, thumbnail: AboutUs2min},
              {original: AboutUs3, thumbnail: AboutUs3min},
              {original: AboutUs4, thumbnail: AboutUs4min},
            ]}
          />
        </Paper>
        <Paper elevation={4} className="p-8 ">
          <div className="flex flex-col gap-7">
            <Typography variant="h4" fontWeight={600}>
              КТО МЫ ТАКИЕ?
            </Typography>
            <Typography variant="body1">
              Мы большая команда артистов,пиротехников и техников. За 10 лет мы
              сделали более 500 огненных и пиротехнических шоу.
            </Typography>
            <Typography>
              Мы делаем шоу как для частных,так и для корпоративных заказчиков.
              С удовольствием принимаем участие в фестивалях и городских
              мероприятиях по всей России, а также работаем с организаторами и
              праздничными агенствами. Вам не нужно ни о чем беспокоиться, ведь
              мы знаем как провести огненное шоу безопасно и чтобы всем
              понравилось!
            </Typography>
            <Button onClick={() => alert(" ОТЗЫВЫ О НАС")}>ОТЗЫВЫ О НАС</Button>
          </div>
        </Paper>
      </div>
    </Container>
  );
};
