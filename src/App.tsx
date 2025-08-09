import CssBaseline from "@mui/material/CssBaseline";

import {createTheme, ThemeProvider} from "@mui/material";
import "./App.css";
import {fireShowRiderText} from "./lib/consts";
import {themeOptions} from "./lib/theme";
import {AppHeader} from "./modules";
import {AboutUs} from "./modules/AboutUs";
import ShowBlock from "./modules/ShowBlock";
import {TopPictureWithText} from "./modules/TopPictureWithText";

const darkTheme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppHeader />
      <TopPictureWithText />

      <div className="py-[6.25rem] flex flex-col gap-[6.25rem] items-center">
        <AboutUs />

        <ShowBlock
          riderText={`▌`}
          videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Огненное шоу"
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
          videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Огненное шоу"
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
          videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Огненное шоу"
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
          videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Огненное шоу"
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
          videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Огненное шоу"
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
      </div>
    </ThemeProvider>
  );
}

export default App;
