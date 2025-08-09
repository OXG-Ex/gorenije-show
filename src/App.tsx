import CssBaseline from "@mui/material/CssBaseline";
import {useState} from "react";

import {Button, Container, createTheme, ThemeProvider} from "@mui/material";
import "./App.css";
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

      <Container>
        {/* <Carousel
          items={[
            <img src="/pictures/IMG_8327.JPG" />,
            <img src="/pictures/DSC_3870.jpg" />,
            <img src="/pictures/IMG_2618.JPG" />,
          ]}
        /> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
