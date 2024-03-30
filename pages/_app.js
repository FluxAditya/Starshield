import Head from "next/head";
import Script from "next/script";
import Navigation from "../layouts/Navigation";
import "../styles/globals.css";
import "../styles/helper.css";
import Footer from "../layouts/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-init" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <meta charset="utf-8" />
        {/* ViewPort */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Site Description */}
        <meta
          name="description"
          content="Geeky Vision is your go-to media and web agency for expert Social Media Management, stunning Graphic Design and impressive Website Design. We blend geeky creativity with aesthetic finesse, delivering fun and engaging content that captivates your audience. Elevate your brand with our unique blend of expertise and creativity!"
        />
        {/* Apple Icons */}
        <link rel="icon" href="/brand/logo-1080x1080.webp" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/brand/logo-72x72.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/brand/logo-114x114.webp"
        />
        <link rel="apple-touch-icon" href="/brand/logo-114x114.webp" />
        
      </Head>
      <main>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
