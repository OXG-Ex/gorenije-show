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

// import fxBlock from "./assets/pictures/colorSmoke-min.webp";
import fireBlockImage from "./assets/pictures/fire-min.webp";
import lightBlock from "./assets/pictures/lightTesla-min.webp";
import pyroBlockImage from "./assets/pictures/pyro_splitter-min.webp";
import {getImageUrl} from "./generated/allImageImports";
import {firePyrotechnicShow_Dragon} from "./generated/firePyrotechnicShow_Dragon";
import {firePyrotechnicShow_GoldenDream} from "./generated/firePyrotechnicShow_GoldenDream";
import {firePyrotechnicShow_RussianFaityTales} from "./generated/firePyrotechnicShow_RussianFaityTales";
import {firePyrotechnicShow_RussianFlex} from "./generated/firePyrotechnicShow_RussianFlex";
import {firePyrotechnicShow_SparkleNight} from "./generated/firePyrotechnicShow_SparkleNight";
import {firePyrotechnicShow_TeslaShowAndInteractive_TeslaShow} from "./generated/firePyrotechnicShow_TeslaShowAndInteractive_TeslaShow";
import {mirrorLaserShow} from "./generated/mirrorLaserShow";

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
          videoSrc="https://oxgex.ru/videos/estrada.mp4"
          title='Огненное шоу "Русская эстрада"'
          imagesSrc={firePyrotechnicShow_RussianFlex.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(firePyrotechnicShow_RussianFlex[6].original)}
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
          videoSrc="https://oxgex.ru/videos/russian.mp4"
          title='Огненное шоу "Русские сказки"'
          imagesSrc={firePyrotechnicShow_RussianFaityTales.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(
            firePyrotechnicShow_RussianFaityTales[0].original
          )}
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
          videoSrc="https://oxgex.ru/videos/golden.mov"
          title='Огненное шоу "Golden Dream"'
          imagesSrc={firePyrotechnicShow_GoldenDream.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(firePyrotechnicShow_GoldenDream[3].original)}
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
          videoSrc="https://oxgex.ru/videos/dragon.MP4"
          title='Пиротехническое шоу "Дракон"'
          imagesSrc={firePyrotechnicShow_Dragon.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(firePyrotechnicShow_Dragon[6].original)}
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
          videoSrc="https://oxgex.ru/videos/sparcle.mov"
          title='Пиротехническое шоу "Sparkle Night"'
          imagesSrc={firePyrotechnicShow_SparkleNight.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(firePyrotechnicShow_SparkleNight[0].original)}
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

        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="https://oxgex.ru/videos/tesla.mov"
          imagesSrc={firePyrotechnicShow_TeslaShowAndInteractive_TeslaShow.map(
            (img) => ({
              originalSrc: getImageUrl(img.original),
              thumbnailSrc: getImageUrl(img.min),
            })
          )}
          headerImg={getImageUrl(
            firePyrotechnicShow_TeslaShowAndInteractive_TeslaShow[0].original
          )}
          title="Тесла-шоу"
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
          videoSrc="https://oxgex.ru/videos/mirror.mov"
          imagesSrc={mirrorLaserShow.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(mirrorLaserShow[2].original)}
          title="Зеркальное шоу"
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

        {/* <BlockSplitter imgSrc={fxBlock} subtitle="" title="Спецэффекты" /> */}

        <Certificates />
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
