import Head from 'next/head';
import { ThemeProvider } from "@emotion/react";
import Normalize from "../components/Normalize";
import GlobalStyles from "../components/GlobalStyles";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Normalize />
        <GlobalStyles theme={theme} />
        <MainContainer>
          <Header />
          <Navigation />
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
