import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e1f5fe"
    },
    secondary: {
      main: "#e1f5fe"
    }
  }
});

// how do we cahnge the text colour of the text box thing 
// didn't we change that already
// oh wait, do you mean the lines surrounding textbox?
// disc

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
