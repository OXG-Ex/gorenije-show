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
  Typography,
} from "@mui/material";
import "./App.css";
import {themeOptions} from "./lib/theme";
import {AppHeader} from "./modules";

const darkTheme = createTheme(themeOptions);

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppHeader />

      {/* The rest of your application */}
      <Button onClick={() => setCount((prev) => prev + 1)}>{count}</Button>
      <main>This app is using the dark mode</main>
      <Typography>SAS</Typography>
      <Container>
        <Box sx={{my: 2}}>
          {[...new Array(122)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
