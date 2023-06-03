import Document from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {Html, Head, Main, NextScript} from 'next/document'




export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet              = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }


  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.svg"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>

          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon_32.png"/>
          <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon_48.png"/>
          <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon_128.png"/>
          <link rel="icon" type="image/png" sizes="256x256" href="/icons/icon_256.png"/>

          <meta name="apple-mobile-web-app-title"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon_180.png"/>
          <meta name="msapplication-TileImage" content="/static/icons/icon_150.png"/>

        </Head>


        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )

  }

}
