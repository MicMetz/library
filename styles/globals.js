import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'




const GlobalStyles = createGlobalStyle`
  ${normalize}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }


  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  body, section {
    line-height: 1;
  }


  ol, ul {
    list-style: none;
  }


  blockquote, q {
    quotes: none;
  }


  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
  }


  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  *, *:before, *:after {
    box-sizing: border-box
  }


  ::-moz-selection {
    background: #FFF29E
  }


  ::selection {
    background: #FFF29E
  }


  html {
    font-size: 14px;
    -moz-font-feature-settings: "kern" 1, "onum" 1;
    -ms-font-feature-settings: "kern" 1, "onum" 1;
    -o-font-feature-settings: "kern" 1, "onum" 1;
    -webkit-font-feature-settings: "kern" 1, "onum" 1;
    font-feature-settings: "kern" 1, "onum" 1;
    font-kerning: normal
  }


  body {
    //background-color: #dfdfdf;
    line-height: 24px;
    padding: 0;
    color: #333;
    font-family: Lyon, Georgia, serif;
    margin: 0 2rem 5rem;
    background-repeat: no-repeat

  }


  div.leadimg {
    background-size: 100px 100px;
    margin: -2rem -2rem 2rem;
    height: calc(100vh - 8.5rem);
    min-height: 300px
  }


  div.leadimg img {
    display: block;
    padding: 5vh;
    width: 100%;
    height: 100%;
    object-fit: scale-down
  }


  footer {
    text-align: center;
    padding: 0.5rem 1rem 0
  }


  header, footer {
    font-family: "PitchWeb", Courier, monospace
  }


  a {
    color: #333;
    text-decoration: none;
    background-image: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%);
    background-position: 0px 100%;
    background-repeat: repeat-x;
    background-size: 2px 2px
  }


  a:hover {

  }


  em {
    font-style: italic
  }

  a {

  }


  header h1, header h2 {
    font-size: 1rem;
    font-weight: normal;
    display: inline;
    margin: 0
  }


  header a {
    background-image: none
  }


  header h1 {
    text-transform: uppercase
  }


  header h2 {
    display: none
  }


  @media (max-width: 800px) {
    body {
      margin: 0
    }
  }


  @media (min-width: 500px) {
    header h2 {
      display: inline
    }

    header h2:before {
      content: " · "
    }
  }


  @media (min-width: 800px) and (max-height: 600px) {
    header h2 {
      display: none
    }
  }


  @media (min-width: 800px) {
    html {
      margin-left: 4.5rem
    }

    header {
      position: fixed;
      top: 0;
      left: -2rem;
      bottom: 0;
      display: flex;
      align-items: center;
      width: 7rem;
      border-right: 1px solid #eee
    }

    header > div {
      transform: rotate(90deg);
      transform-origin: top left;
      position: absolute;
      left: 5rem;
      top: calc(50vh - 12rem);
      line-height: 1;
      width: 24rem;
      height: 2em
    }

    footer {
      max-width: 43rem;
      margin: 0 auto;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 4rem 1rem 0
    }


  }


  @media (min-width: 1200px) {
    body {
      margin-left: calc(50vw - 5rem);
      padding: 4rem 2rem 0
    }


    footer {
      margin: 4rem 2rem 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 4rem 1rem 0
    }


  }
`



export default GlobalStyles
