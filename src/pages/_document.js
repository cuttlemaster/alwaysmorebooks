import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,600;1,400;1,600&family=Lilita+One&family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
