import CssBaseline from "@mui/material/CssBaseline";
import {useState} from "react";

// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import "./App.css";
import {Carousel} from "./components/Carousel";
import {themeOptions} from "./lib/theme";
import {AppHeader} from "./modules";
import {TopPictureWithText} from "./modules/TopPictureWithText";

const darkTheme = createTheme(themeOptions);

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppHeader />
      <TopPictureWithText />

      <Button onClick={() => setCount((prev) => prev + 1)}>{count}</Button>
      <Carousel
        items={[
          <img src="/pictures/IMG_8327.JPG" />,
          <img src="/pictures/DSC_3870.jpg" />,
          <img src="/pictures/IMG_2618.JPG" />,
        ]}
      />
    </ThemeProvider>
  );
}

export default App;
