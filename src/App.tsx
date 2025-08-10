import CssBaseline from "@mui/material/CssBaseline";

import {createTheme, ThemeProvider} from "@mui/material";
import "./App.css";
import {fireShowRiderText} from "./lib/consts";
import {themeOptions} from "./lib/theme";
import {AppHeader} from "./modules";
import {AboutUs} from "./modules/AboutUs";
import BlockSplitter from "./modules/BlockSplitter";
import {Certificates} from "./modules/Certificates";
import {Footer} from "./modules/Footer";
import ShowBlock from "./modules/ShowBlock";
import {TopPictureWithText} from "./modules/TopPictureWithText";

import fireBlockImage from "./assets/pictures/fireshow/fire-min.jpg";
import fxBlock from "./assets/pictures/fx/colorSmoke-min.jpg";
import lightBlock from "./assets/pictures/lightshow/lightTesla-min.jpg";
import pyroBlockImage from "./assets/pictures/pyroshow/pyro_splitter-min.jpg";

const darkTheme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppHeader />
      <TopPictureWithText />

      <div className="py-[6.25rem] flex flex-col gap-[6.25rem] items-center">
        <AboutUs />

        <BlockSplitter
          imgSrc={fireBlockImage}
          subtitle="Самое зрелищное шоу"
          title="Огненно-пиротехническое шоу"
        />

        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="http://171.22.117.126/videos/estrada.mp4"
          title='Огненное шоу "Русская эстрада"'
          options={[
            {price: "22 000 рублей", timing: "15 минут", type: "Соло"},
            {price: "28 000 рублей", timing: "18 минут", type: "Дуэт"},
            {price: "35 000 рублей", timing: "25 минут", type: "Трио"},
          ]}
          subtitles={[
            "Жонглирование огненным реквизитом;",
            "Оформление сцены пиротехникой;",
            " Номер с огнеметом;",
            "Огненное сердце в подарок;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />

        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="http://171.22.117.126/videos/russian.mp4"
          title='Огненное шоу "Русские сказки"'
          options={[
            {price: "22 000 рублей", timing: "15 минут", type: "Соло"},
            {price: "28 000 рублей", timing: "18 минут", type: "Дуэт"},
            {price: "35 000 рублей", timing: "25 минут", type: "Трио"},
          ]}
          subtitles={[
            "Жонглирование огненным реквизитом;",
            "Оформление сцены пиротехникой;",
            " Номер с огнеметом;",
            "Огненное сердце в подарок;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />
        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="http://171.22.117.126/videos/golden.mov"
          title='Огненное шоу "Golden Dream"'
          options={[
            {price: "22 000 рублей", timing: "15 минут", type: "Соло"},
            {price: "28 000 рублей", timing: "18 минут", type: "Дуэт"},
            {price: "35 000 рублей", timing: "25 минут", type: "Трио"},
          ]}
          subtitles={[
            "Жонглирование огненным реквизитом;",
            "Оформление сцены пиротехникой;",
            " Номер с огнеметом;",
            "Огненное сердце в подарок;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />

        <BlockSplitter
          imgSrc={pyroBlockImage}
          subtitle="когда нужен красивый финал"
          title="Пиротехническое шоу"
        />

        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="http://171.22.117.126/videos/dragon.MP4"
          title='Пиротехническое шоу "Дракон"'
          options={[
            {price: "22 000 рублей", timing: "15 минут", type: "Соло"},
            {price: "28 000 рублей", timing: "18 минут", type: "Дуэт"},
            {price: "35 000 рублей", timing: "25 минут", type: "Трио"},
          ]}
          subtitles={[
            "Жонглирование огненным реквизитом;",
            "Оформление сцены пиротехникой;",
            " Номер с огнеметом;",
            "Огненное сердце в подарок;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />
        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="http://171.22.117.126/videos/sparcle.mov"
          title='Пиротехническое шоу "Sparkle Night"'
          options={[
            {price: "22 000 рублей", timing: "15 минут", type: "Соло"},
            {price: "28 000 рублей", timing: "18 минут", type: "Дуэт"},
            {price: "35 000 рублей", timing: "25 минут", type: "Трио"},
          ]}
          subtitles={[
            "Жонглирование огненным реквизитом;",
            "Оформление сцены пиротехникой;",
            " Номер с огнеметом;",
            "Огненное сердце в подарок;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />

        <BlockSplitter
          imgSrc={lightBlock}
          subtitle=""
          title="Шоу для банкетного зала"
        />

        <BlockSplitter imgSrc={fxBlock} subtitle="" title="Спецэффекты" />

        <Certificates />
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
