import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });
  return <ThemeProvider theme={darkTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
}
