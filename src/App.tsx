import CssBaseline from "@mui/material/CssBaseline";

import {createTheme, ThemeProvider} from "@mui/material";
import "./App.css";
import {fireShowRiderText} from "./lib/consts";
import {themeOptions} from "./lib/theme";
import {AppHeader} from "./modules";
import {AboutUs} from "./modules/AboutUs";
import BlockSplitter from "./modules/BlockSplitter";
import {Footer} from "./modules/Footer";
import ShowBlock from "./modules/ShowBlock";
import {TopPictureWithText} from "./modules/TopPictureWithText";

//import fxBlock from "./assets/pictures/colorSmoke-min.webp";
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
import {snowShow} from "./generated/snowShow";

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
            {price: "29 000 рублей", timing: "2 артиста", type: "База"},
            {price: "40 000 рублей", timing: "3 артиста", type: "Стандарт"},
            {price: "47 000 рублей", timing: "3 артиста", type: "Премиум"},
            {price: "9 минут", timing: "", type: "Продолжительность"},
          ]}
          subtitles={[
            "5 видов огненного реквизита;",
            "4 вида пиротехнического реквизита;",
            "6 единиц оформительской пиротехники;",
            "Генераторы огня;",
            "Музыкальное сопровождение;",
            "Сценическое освещение;",
            "Огненное сердце в подарок;",
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
            firePyrotechnicShow_RussianFaityTales[0].original,
          )}
          options={[
            {price: "30 000 рублей", timing: "2 артиста", type: "База"},
            {price: "40 000 рублей", timing: "3 артиста", type: "Стандарт"},
            {price: "55 000 рублей", timing: "4 артиста", type: "Премиум"},
            {price: "75 000 рублей", timing: "5 артистов", type: "Максимум"},
            {price: "9 минут", timing: "", type: "Продолжительность"},
          ]}
          subtitles={[
            "5 видов огненного реквизита;",
            "5 видов пиротехнического реквизита;",
            "8 единиц оформительской пиротехники;",
            "Генераторы огня;",
            "Огнемёт;",
            "Музыкальное сопровождение;",
            "Сценическое освещение;",
            "Огненное сердце в подарок;",
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
            {price: "35 000 рублей", timing: "3 артиста", type: "Стандарт"},
            {price: "40 000 рублей", timing: "3 артиста", type: "Премиум"},
            {price: "9 минут", timing: "", type: "Продолжительность"},
          ]}
          subtitles={[
            "5 видов огненного реквизита;",
            "4 вида пиротехнического реквизита;",
            "6 единиц оформительской пиротехники;",
            "Генераторы огня;",
            "Огнемёт;",
            "Музыкальное сопровождение;",
            "Сценическое освещение;",
            "Огненное сердце в подарок;",
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
            {price: "23 000 рублей", timing: "1 артист", type: "Стандарт"},
            {price: "26 000 рублей", timing: "1 артист", type: "Премиум"},
            {price: "8 минут", timing: "", type: "Продолжительность"},
          ]}
          subtitles={[
            "3 вида огненного реквизита;",
            "3 вида пиротехнического реквизита;",
            "4 единицы оформительской пиротехники + инсталляции;",
            "Генераторы огня;",
            "Музыкальное сопровождение;",
            "Сценическое освещение;",
            "Огненное сердце в подарок;",
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
            {price: "20 000 рублей", timing: "1 артист", type: "Стандарт"},
            {price: "25 000 рублей", timing: "1 артист", type: "Премиум"},
            {price: "8 минут", timing: "", type: "Продолжительность"},
          ]}
          subtitles={[
            "3 вида огненного реквизита;",
            "3 вида пиротехнического реквизита;",
            "6 единиц оформительской пиротехники + вертушка;",
            "Огнемёт;",
            "Музыкальное сопровождение;",
            "Сценическое освещение;",
            "Огненное сердце в подарок;",
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
            }),
          )}
          headerImg={getImageUrl(
            firePyrotechnicShow_TeslaShowAndInteractive_TeslaShow[0].original,
          )}
          title="Тесла-шоу"
          options={[
            {price: "18 000 рублей", timing: "2 артиста", type: "Стандарт"},
            {price: "22 000 рублей", timing: "3 артиста", type: "Премиум"},
            {price: "30 минут", timing: "", type: "Продолжительность"},
          ]}
          subtitles={[
            "Световой реквизит;",
            "Катушка Тесла;",
            "Интерактив с гостями - фото с молниями и лампами;",
            "Лазер и дым-машина;",
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
            {price: "22 000 рублей", timing: "3 артиста", type: "Стандарт"},
            {
              price: "7 минут + интерактив",
              timing: "",
              type: "Продолжительность",
            },
          ]}
          subtitles={[
            "Зеркальный, лазерный и световой реквизит;",
            "Кинетическая скульптура - вертушка;",
            "Интерактив с гостями - фотосессия с артистами;",
            "Лазер и дым-машина;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />

        <ShowBlock
          riderText={fireShowRiderText}
          videoSrc="https://oxgex.ru/videos/snow.mov"
          imagesSrc={snowShow.map((img) => ({
            originalSrc: getImageUrl(img.original),
            thumbnailSrc: getImageUrl(img.min),
          }))}
          headerImg={getImageUrl(snowShow[1].original)}
          title="Снежное шоу"
          options={[
            {price: "22 000 рублей", timing: "3 артиста", type: "Стандарт"},
            {
              price: "20 минут",
              timing: "",
              type: "Продолжительность",
            },
          ]}
          subtitles={[
            "Световой реквизит;",
            "Хвост павлина;",
            "Танцевальный интерактив с гостями",
            "Генератор снега;",
            "Фотосессия с артистами;",
            "Музыкальное сопровождение;",
            "Доставка шоу в пределах города.",
          ]}
        />

        {/* <BlockSplitter imgSrc={fxBlock} subtitle="" title="Спецэффекты" /> */}

        {/* <Certificates /> */}
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
