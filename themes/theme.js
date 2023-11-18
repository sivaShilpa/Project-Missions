import { createTheme } from "@mui/material";

const theme = createTheme({
  headerTheme: {
    primary: "#1F222A",
    secondary: "#808191",
    highlight: "linear-gradient(286deg, #00F5A0 0%, #00D9F5 100%)",
    white: "#FFFFFF",
    diamondsBorder: "#246BFD",
    diamondsBackground: "#212121",
    coinsBorder: "#FACC15",
    coinsBackground: "#181A20",
  },
  missionsTheme: {
    primary: "linear-gradient(286deg, #99FDFF 0%, #D1B3FF 100%)",
    cardBorder: "gray",
    cardBackground: "#181A20",
    border: "#35383F",
    font: "#E0E0E0",
    bottomNumberBorder: "var(--gradients-gradient-red, #FF5A5F)",
    bottomNumberBackground:
      "var(--gradients-gradient-red, linear-gradient(286deg, #FF5A5F 0%, #FF8A9B 100%))",
    startNowButtonBorder: "var(--gradients-gradient-purple, #6949FF)",
    startNowButtonBackground:
      "var(--gradients-purples, linear-gradient(286deg, #6335F8 0%, #E71DE7 100%))",
    white: "var(--others-white, #FFF)",
    footerButtonBorder: "var(--dark-dark-3, #262A35)",
    footerButtonBackground: "var(--dark-dark-1, #181A20)",
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
  },
  overrides: {
    MuiSelect: {
      select: {
        padding: "0px !important"
      }
    }
  }
});

export default theme;
