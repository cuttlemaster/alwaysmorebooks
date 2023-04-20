import Head from 'next/head'
import GlobalStyles from "../components/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
