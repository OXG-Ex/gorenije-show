import {Button, Container, Paper, Typography} from "@mui/material";
import type {FunctionComponent} from "react";
import AboutUs1 from "../assets/pictures/aboutUs_1.png";
import AboutUs2 from "../assets/pictures/aboutUs_2.png";
import AboutUs3 from "../assets/pictures/aboutUs_3.jpg";
import AboutUs4 from "../assets/pictures/aboutUs_4.png";
import {Gallery} from "../components/Gallery";

interface AboutUsProps {
  aaa?: string;
}

export const AboutUs: FunctionComponent<AboutUsProps> = () => {
  return (
    <Container>
      <div className="flex items-center justify-center gap-8">
        <Paper
          elevation={4}
          className="grid grid-cols-2 grid-rows-2 p-6 gap-x-3 gap-y-3 shrink-0"
        >
          <Gallery
            items={[
              {original: AboutUs1, thumbnail: AboutUs1},
              {original: AboutUs2, thumbnail: AboutUs2},
              {original: AboutUs3, thumbnail: AboutUs3},
              {original: AboutUs4, thumbnail: AboutUs4},
            ]}
          />
        </Paper>
        <Paper elevation={4} className="p-8 h-[27.75rem]">
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
