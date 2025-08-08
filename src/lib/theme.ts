import type {ThemeOptions} from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#fcac23",
    },
    secondary: {
      main: "#663a91",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
        },
      },
    },
  },
};
