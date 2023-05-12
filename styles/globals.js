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
    font-size: 100%;
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
    content: none;
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
    background-color: white;
    line-height: 24px;
    padding: 0;
    margin: 0 2rem;
    color: #333;
    font-family: Lyon, Georgia, serif;
    margin-bottom: 5rem
  }


  body#homepage {
    background: #dfdfdf repeat;
    background-size: 100px 100px;
    background-blend-mode: multiply
  }


  body#homepage footer {
    border-top: none;
    margin: 0 auto
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


  header, footer, main#home {
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
    color: #b95b23
  }


  em {
    font-style: italic
  }


  article {
    margin: 2rem auto;
    padding: 0 2rem
  }


  article p, article h2, article h3 {
    margin: 0 auto;
    max-width: 30em;
    font-size: 20px;
    line-height: 30px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.001em;
    word-spacing: 0.005em
  }


  article h2 {
    margin: 4rem auto;
    color: #b95b23
  }


  article h2 span {
    display: block;
    color: #333;
    font-family: Courier, monospace;
    font-size: 1rem;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto
  }


  article h3 {
    margin-bottom: 0
  }


  article > p + p {
    text-indent: 1.5em
  }


  p.block {
    text-indent: 0;
    margin-top: 2rem;
    margin-bottom: 2rem
  }


  p.caption {
    font-family: Courier, monospace;
    font-size: 1rem;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto
  }


  p.backers {
    text-align: center
  }


  article img {
    width: 100%
  }


  article img:first-child {
    mix-blend-mode: multiply
  }


  article blockquote {
    margin: 4rem auto;
    font-style: italic
  }


  article blockquote cite {
    display: block;
    font-style: normal;
    text-transform: uppercase;
    font-size: 80%;
    letter-spacing: 0.05em
  }


  article ul {
    list-style: disc;
    max-width: 35rem;
    margin: 3rem auto;
    font-family: Courier, monospace;
    font-size: 1rem;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto
  }


  article ul li {
    padding-left: 1rem
  }


  article h3 + ul {
    margin-top: 1rem
  }


  img.art {
    display: block;
    width: calc(100% - 2rem);
    margin: 4rem 1rem
  }


  p.forward {
    text-align: center;
    margin: 5rem auto 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 3rem;
    text-indent: 0
  }


  a.nextchap {
    display: block;
    background-image: none;
    text-align: center
  }


  a.nextchap img {
    max-width: 3rem;
    text-indent: 0;
    transition: all 0.2s ease
  }


  a.nextchap:hover img {
    margin-left: 1rem
  }


  a.nextchap em, a.nextchap span {
    display: block
  }


  a.nextchap span {
    font-family: Courier, monospace;
    font-size: 1rem;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    text-indent: 0
  }


  a.buy {
    text-decoration: none;
    background-color: black;
    color: white;
    transition: all 0.1s ease;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem
  }


  a.buy:hover {
    background-image: none;
    background-color: #b95b23;
    -webkit-animation: rotation 2s infinite linear
  }


  header {
    text-align: center;
    padding: 1.5rem 1rem;
    text-align: center;
    background-color: white;
    z-index: 100
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


  nav > a {
    font-family: Courier, monospace;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto
  }


  .menu-button {
    display: none;
    width: 40px;
    height: 40px;
    top: 20px;
    left: 46px;
    position: absolute
  }


  .menu-button:hover {
    cursor: pointer
  }


  .menu-button:before, .menu-button:after {
    content: "";
    width: 21px;
    height: 1px;
    background: #333;
    display: block;
    position: absolute;
    left: 5px;
    transition: all .2s ease-in-out
  }


  .menu-button:before {
    top: 13px
  }


  .menu-button:after {
    top: 22px
  }


  .menu-button-open:before {
    transform: rotate(45deg) translate(3px, 3px)
  }


  .menu-button-open:after {
    transform: rotate(-45deg) translate(4px, -3px)
  }


  nav {
    text-align: center;
    background-color: white;
    margin: 4rem 0;
    padding: 3rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee
  }


  nav h3 {
    font-family: Courier, monospace;
    font-size: 1rem;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto
  }


  nav h3:after {
    content: "";
    display: block;
    width: 4rem;
    border-bottom: 1px solid #ddd;
    margin: 2rem auto
  }


  .toc li {
    margin: 2.5rem 1rem
  }


  .toc a {
    font-size: 1.25rem;
    background-image: none
  }


  .toc a span {
    display: block;
    font-size: 1rem;
    font-family: Courier, monospace;
    color: rgba(0, 0, 0, 0.5)
  }


  div.sublinks {
    padding-bottom: 3rem
  }


  div.sublinks a {
    font-family: Courier, monospace;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    display: inline-block;
    margin-right: 1.5em
  }


  div.sublinks a:last-child {
    margin-right: 0
  }


  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg)
    }

    to {
      -webkit-transform: rotate(359deg)
    }
  }


  @keyframes menu-item-animation {
    0% {
      transform: translate(-300px, 0px);
      opacity: 0
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1
    }
  }


  main#home div.cover {
    margin: 4em 0;
    position: relative
  }




  main#home blockquote {
    text-align: center;
    margin: 2rem auto;
    max-width: 25em;
    font-style: normal
  }


  main#home blockquote a {
    text-transform: uppercase
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

    div.leadimg {
      margin-left: -4.5rem;
      height: calc(100vh - 6rem)
    }

    a.buy {
      right: 2rem;
      top: 2rem;
      width: 5em;
      height: 5em
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

    .menu-button {
      display: block;
      margin-left: 2px
    }

    .menu-items {
      position: fixed;
      top: 0;
      bottom: 0;
      left: calc(5rem - 300px);
      margin: 0;
      max-width: 300px;
      z-index: 4;
      transition: all .3s ease-in-out;
      border-right: 1px solid #f0f0f0;
      border-top: none;
      border-bottom: none;
      overflow-y: auto
    }

    .menu-items-open {
      left: 5rem;
      transition: all .3s ease-in-out
    }

    footer {
      max-width: 43rem;
      margin: 0 auto;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 4rem 1rem 0
    }

   
    main#home div.cover {
      width: calc(40% + 4rem);
      order: 2;
      padding: 0 2rem
    }

    main#home div.cover img {
      display: block;
      margin: 0 auto;
      width: auto;
      max-width: 28vw;
      max-height: calc(100vh - 12rem);
      object-fit: contain
    }

  }


  @media (min-width: 1200px) {
    body:not(#homepage) {
      margin-left: calc(50vw - 5rem);
      padding: 4rem 2rem 0
    }

    div.leadimg {
      background-size: 100px 100px;
      position: fixed;
      left: 5rem;
      top: 0;
      bottom: 0;
      height: 100vh;
      margin: 0;
      width: calc(50vw - 5rem);
      background-color: #fff
    }

    div.leadimg img {
      display: block;
      padding: 2rem;
      width: 100%;
      height: 100vh;
      object-fit: scale-down
    }

    footer {
      margin: 4rem 2rem 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 4rem 1rem 0
    }

    main#home div.cover {
      width: calc(50% + 4rem);
      order: 2;
      padding: 0 2rem
    }

    main#home div.cover img {
      max-width: 38vw;
      max-height: calc(100vh - 12rem);
      object-fit: contain
    }
  }
`



export default GlobalStyles
