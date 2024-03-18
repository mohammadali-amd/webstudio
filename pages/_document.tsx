import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa">
      <Head>
        <meta charSet="utf-8" />

        {/* <!--====== Title ======--> */}
        <title>Plain</title>

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!--====== Favicon Icon ======--> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
        {/* <!--====== Line Icons CSS ======--> */}
        <link rel="stylesheet" href="https://cdn.lineicons.com/4.0/lineicons.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
