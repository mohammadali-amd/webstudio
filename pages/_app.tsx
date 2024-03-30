import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from 'next/font/local';

const vazirFont = localFont({ src: '../public/fonts/Vazirmatn-Regular.ttf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Webstudio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={vazirFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
