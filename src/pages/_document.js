import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Html, Head, Main, NextScript } from 'next/document'




export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
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


  render () {
    return (
      <Html lang = "en">
        <Head >
          <meta
            content = "width=device-width, initial-scale=1"
          />
          <link rel = "icon" href = "/static/icons/favicon.ico"/>
          <link rel = "manifest" href = "/static/manifest.json"/>

          <link
            href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel = "stylesheet"
          />

          <link
            rel = "icon"
            type = "image/png"
            sizes = "32x32"
            href = "/static/icons/icon_32.png"
          />
          <link
            rel = "icon"
            type = "image/png"
            sizes = "48x48"
            href = "/static/icons/icon_48.png"
          />
          <link
            rel = "icon"
            type = "image/png"
            sizes = "128x128"
            href = "/static/icons/icon_128.png"
          />
          <link
            rel = "icon"
            type = "image/png"
            sizes = "256x256"
            href = "/static/icons/icon_256.png"
          />

          <meta
            name = "apple-mobile-web-app-title"
          />
          <link
            rel = "apple-touch-icon"
            sizes = "152x152"
            href = "/static/icons/icon_180.png"
          />
          <meta
            name = "msapplication-TileImage"
            content = "/static/icons/icon_150.png"
          />
        </Head >
        <body >
          <Main />
          <NextScript />
        </body >
      </Html >
    )

  }

}
