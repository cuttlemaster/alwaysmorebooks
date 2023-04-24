import Head from 'next/head';
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyles theme={theme}/>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
