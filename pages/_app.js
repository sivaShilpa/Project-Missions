// import { ThemeProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import { AppLayout } from "./layouts/AppLayout";
import theme from "../themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
