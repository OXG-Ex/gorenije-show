import CssBaseline from "@mui/material/CssBaseline";
import {useState} from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import {themeOptions} from "./lib/theme";
import {AppHeader} from "./modules";
import {CarouselEX} from "./modules/Carousel";

const darkTheme = createTheme(themeOptions);

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppHeader />

      <Button onClick={() => setCount((prev) => prev + 1)}>{count}</Button>
      <Container>
        <CarouselEX />
        <Box sx={{my: 2}}>
          {[...new Array(122)]
            .map(
              () =>
                `КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ КОНТЕНТ `
            )
            .join("\n")}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
