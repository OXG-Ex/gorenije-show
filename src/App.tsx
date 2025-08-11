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

import fireBlockImage from "./assets/pictures/fireshow/fire-min.webp";
import fxBlock from "./assets/pictures/fx/colorSmoke-min.webp";
import lightBlock from "./assets/pictures/lightshow/lightTesla-min.webp";
import pyroBlockImage from "./assets/pictures/pyroshow/pyro_splitter-min.webp";

import mirror1 from "./assets/pictures/lightshow/mirror1.jpg";
import mirror2 from "./assets/pictures/lightshow/mirror2.jpg";
import mirror3 from "./assets/pictures/lightshow/mirror3.jpg";
import mirror4 from "./assets/pictures/lightshow/mirror4.jpg";
import mirror5 from "./assets/pictures/lightshow/mirror5.jpg";
import mirror6 from "./assets/pictures/lightshow/mirror6.jpg";
import mirror7 from "./assets/pictures/lightshow/mirror7.jpg";
import mirror8 from "./assets/pictures/lightshow/mirror8.jpg";
import mirror9 from "./assets/pictures/lightshow/mirror9.jpg";

import mirror1min from "./assets/pictures/lightshow/mirror1-compressed.webp";
import mirror2min from "./assets/pictures/lightshow/mirror2-compressed.webp";
import mirror3min from "./assets/pictures/lightshow/mirror3-compressed.webp";
import mirror4min from "./assets/pictures/lightshow/mirror4-compressed.webp";
import mirror5min from "./assets/pictures/lightshow/mirror5-compressed.webp";
import mirror6min from "./assets/pictures/lightshow/mirror6-compressed.webp";
import mirror7min from "./assets/pictures/lightshow/mirror7-compressed.webp";
import mirror8min from "./assets/pictures/lightshow/mirror8-compressed.webp";
import mirror9min from "./assets/pictures/lightshow/mirror9-compressed.webp";

import tesla1min from "./assets/pictures/lightshow/tesla1-min.webp";
import tesla1 from "./assets/pictures/lightshow/tesla1.jpg";
import tesla3min from "./assets/pictures/lightshow/tesla3-compressed.webp";
import tesla3 from "./assets/pictures/lightshow/tesla3.jpg";
import tesla4min from "./assets/pictures/lightshow/tesla4-compressed.webp";
import tesla4 from "./assets/pictures/lightshow/tesla4.jpg";
import tesla5min from "./assets/pictures/lightshow/tesla5-compressed.webp";
import tesla5 from "./assets/pictures/lightshow/tesla5.jpg";
import tesla6min from "./assets/pictures/lightshow/tesla6-compressed.webp";
import tesla6 from "./assets/pictures/lightshow/tesla6.jpg";
import tesla7min from "./assets/pictures/lightshow/tesla7-compressed.webp";
import tesla7 from "./assets/pictures/lightshow/tesla7.jpg";
import tesla8min from "./assets/pictures/lightshow/tesla8-compressed.webp";
import tesla8 from "./assets/pictures/lightshow/tesla8.jpg";
import tesla9min from "./assets/pictures/lightshow/tesla9-compressed.webp";
import tesla9 from "./assets/pictures/lightshow/tesla9.jpg";

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
          imagesSrc={[
            {originalSrc: tesla1, thumbnailSrc: tesla1min},
            {originalSrc: tesla3, thumbnailSrc: tesla3min},
            {originalSrc: tesla4, thumbnailSrc: tesla4min},
            {originalSrc: tesla5, thumbnailSrc: tesla5min},
            {originalSrc: tesla6, thumbnailSrc: tesla6min},
            {originalSrc: tesla7, thumbnailSrc: tesla7min},
            {originalSrc: tesla8, thumbnailSrc: tesla8min},
            {originalSrc: tesla9, thumbnailSrc: tesla9min},
          ]}
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
          imagesSrc={[
            {originalSrc: mirror1, thumbnailSrc: mirror1min},
            {originalSrc: mirror2, thumbnailSrc: mirror2min},
            {originalSrc: mirror3, thumbnailSrc: mirror3min},
            {originalSrc: mirror4, thumbnailSrc: mirror4min},
            {originalSrc: mirror5, thumbnailSrc: mirror5min},
            {originalSrc: mirror6, thumbnailSrc: mirror6min},
            {originalSrc: mirror7, thumbnailSrc: mirror7min},
            {originalSrc: mirror8, thumbnailSrc: mirror8min},
            {originalSrc: mirror9, thumbnailSrc: mirror9min},
          ]}
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

        <BlockSplitter imgSrc={fxBlock} subtitle="" title="Спецэффекты" />

        <Certificates />
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
