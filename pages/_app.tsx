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
        <title>Webstudio | وب استودیو</title>
        <meta name="description" content="وب استودیو، راهکار حرفه‌ای توسعه وبسایت برای شرکت ها و کسب و کار ها. طراحی سفارشی، بهینه‌سازی SEO و پشتیبانی گسترده؛ با ما، وبسایتی قدرتمند برای رشد کسب و کار خود ایجاد کنید." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={vazirFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
