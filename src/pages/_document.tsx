import Document, { Html, Head, Main, NextScript } from 'next/document'
import { metaData } from '~/utils/metaData'

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta name="theme-color" content="#333" />
          <meta property="og:type" content={metaData.meta.type} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script src="/vendor/picturefill.min.js" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
