import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'




const GlobalStyles = createGlobalStyle`
  ${normalize}
  :root {
    --color-primary: #e88448FF;
    --color-secondary: #FF1847FF;
    --color-tertiary: #333333FF;
    --color-quaternary: #FFD803FF;
    --color-quinary: #FFA803FF;
    --color-senary: #FFD803FF;
    --color-white: #FFFFFFFF;
    //--color-gray-800: #2d3748;
    //--color-crimson: #DC143C;
    //--color-light-cream: #F5F5F5;

    --color-text: #333333FF;
    --color-button: #FF1847FF;
    --inferface-color: #1A1E23FF;
    --background-color: #d6d8deDD;

    --nav-height: 4vh;
    --nav-width: 100vw;

    --sidebar-width: 20vw;
    --sidebar-height: 100vh;

    --footer-height: 20rem;
    --footer-width: 100vw;

    --main-height: calc(100vh - var(--nav-height));

    /**
		MaggieAppleton
		https://github.com/MaggieAppleton
	*/

    /* Colors */
    --color-light-cream: #FCFBF7;
    --color-cream: #F6F5F1;
    --color-tinted-cream: #E6E3E1;
    --color-black: #353534;
    --color-gray-800: #4A4A46;
    --color-gray-600: #73706D;
    --color-gray-500: #8E8F94;
    --color-gray-400: #AFB0B6;
    --color-gray-300: #D3D3D1;
    --color-gray-100: #E9E9E7;
    --color-bright-crimson: #960462;
    --color-crimson: #5F023E;
    --color-sea-blue: #04A5BB;
    --color-medium-sea-blue: #008BA3;
    --color-dark-sea-blue: #00758F;
    --color-purple: #7558B2;
    --color-salmon: #FD8370;


    /* Fonts */
    --font-serif: 'Canela Deck', serif;
    --font-body: 'Canela Text', serif;
    --font-sans: 'Lato', sans-serif;


    /* Leading */
    --leading-tighter: 110%;
    --leading-tight: 120%;
    --leading-snug: 130%;
    --leading-base: 140%;
    --leading-loose: 170%;
    --leading-looser: 200%;

    /* Border radius */
    --border-radius-sm: 0.2rem;
    --border-radius-base: 0.4rem;
    --border-radius-lg: 0.6rem;

    /* Box Shadows */
    --box-shadow-sm: 0.2px 0.2px 0.8px -10px rgba(40, 10, 0, 0.014),
    0.4px 0.4px 2px -10px rgba(40, 10, 0, 0.02),
    0.8px 0.8px 3.8px -10px rgba(40, 10, 0, 0.025),
    1.3px 1.3px 6.7px -10px rgba(40, 10, 0, 0.03),
    2.5px 2.5px 12.5px -10px rgba(40, 10, 0, 0.036),
    6px 6px 30px -10px rgba(40, 10, 0, 0.05);

    --box-shadow-md: 1px 0.9px 2.3px -3px rgba(30, 10, 10, 0.04),
    2.4px 2.2px 5.5px -3px rgba(30, 10, 10, 0.05),
    4.5px 4.1px 10.4px -3px rgba(30, 10, 10, 0.06),
    8px 7.4px 18.5px -3px rgba(30, 10, 10, 0.07),
    15px 13.8px 34.7px -3px rgba(30, 10, 10, 0.08),
    36px 33px 83px -3px rgba(30, 10, 10, 0.2);

    --box-shadow-lg: 0.2px 0.4px 0.8px -10px rgba(0, 0, 0, 0.03),
    0.4px 0.9px 2px -10px rgba(0, 0, 0, 0.030),
    0.8px 1.8px 3.8px -10px rgba(0, 0, 0, 0.038),
    1.3px 3.1px 6.7px -10px rgba(0, 0, 0, 0.045),
    2.5px 5.8px 12.5px -10px rgba(0, 0, 0, 0.06),
    6px 14px 30px -10px rgba(0, 0, 0, 0.08);

    /* Fluid spacing */
    --fc-3xs-min: (var(--fc-s-min) * 0.25);
    --fc-3xs-max: (var(--fc-s-max) * 0.25);

    --fc-2xs-min: (var(--fc-s-min) * 0.5);
    --fc-2xs-max: (var(--fc-s-max) * 0.5);

    --fc-xs-min: (var(--fc-s-min) * 0.75);
    --fc-xs-max: (var(--fc-s-max) * 0.75);

    --fc-s-min: (var(--f-0-min, 20));
    --fc-s-max: (var(--f-0-max, 22));

    --fc-m-min: (var(--fc-s-min) * 1.5);
    --fc-m-max: (var(--fc-s-max) * 1.5);

    --fc-l-min: (var(--fc-s-min) * 2);
    --fc-l-max: (var(--fc-s-max) * 2);

    --fc-xl-min: (var(--fc-s-min) * 3);
    --fc-xl-max: (var(--fc-s-max) * 3);

    --fc-2xl-min: (var(--fc-s-min) * 4);
    --fc-2xl-max: (var(--fc-s-max) * 4);

    --fc-3xl-min: (var(--fc-s-min) * 6);
    --fc-3xl-max: (var(--fc-s-max) * 6);

    --fc-4xl-min: (var(--fc-s-min) * 8);
    --fc-4xl-max: (var(--fc-s-max) * 8);

    //--space-2xs: 0.25rem;
    //--space-xs: 0.5rem;
    //--space-s: 1rem;
    //--space-m: 2rem;
    //--space-l: 4rem;
    //--space-xl: 8rem;
    //--space-2xl: 16rem;
    //--space-3xl: 32rem;
    --space-4: 0.25rem;
    --space-8: 0.5rem;
    --space-12: 0.75rem;
    --space-16: 1rem;
    --space-24: 1.5rem;
    --space-32: 2rem;
    --space-48: 3rem;
    --space-64: 4rem;
    --space-80: 5rem;
    --space-96: 6rem;
    --space-128: 8rem;
    --space-160: 10rem;

    --space-3xs: calc(((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-3xs-max) - var(--fc-3xs-min)) * var(--fluid-bp));
    --space-2xs: calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp));
    --space-xs: calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp));
    --space-s: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp));
    --space-m: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp));
    --space-l: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp));
    --space-xl: calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp));
    --space-2xl: calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp));
    --space-3xl: calc(((var(--fc-3xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-3xl-min)) * var(--fluid-bp));
    --space-4xl: calc(((var(--fc-4xl-min) / 16) * 1rem) + (var(--fc-4xl-max) - var(--fc-4xl-min)) * var(--fluid-bp));

    /* One-up pairs */
    --space-3xs-2xs: calc(((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-3xs-min)) * var(--fluid-bp));
    --space-2xs-xs: calc(((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp));
    --space-xs-s: calc(((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp));
    --space-s-m: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp));
    --space-m-l: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp));
    --space-l-xl: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp));
    --space-xl-2xl: calc(((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp));
    --space-2xl-3xl: calc(((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-2xl-min)) * var(--fluid-bp));
    --space-3xl-4xl: calc(((var(--fc-3xl-min) / 16) * 1rem) + (var(--fc-4xl-max) - var(--fc-3xl-min)) * var(--fluid-bp));


    --font-size-2xl: 2.5rem;
    --font-size-xl: 2rem;
    --font-size-l: 1.5rem;
    --font-size-m: 1.25rem;
    --font-size-s: 1rem;
    --font-size-xs: 0.75rem;
    --font-size-xxs: 0.5rem;

    --fluid-min-width: 320;
    --fluid-max-width: 1200;

    --fluid-screen: 100vw;
    --fluid-bp: calc((var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
    (var(--fluid-max-width) - var(--fluid-min-width)));

    --f--2-min: 14.5;
    --f--2-max: 15;
    --font-size-xs: calc(((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
    var(--fluid-bp));

    --f--1-min: 16.00;
    --f--1-max: 16.50;
    --font-size-sm: calc(((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
    var(--fluid-bp));

    --f-0-min: 20.00;
    --f-0-max: 22.00;
    --font-size-base: calc(((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
    var(--fluid-bp));

    --f-1-min: 25.00;
    --f-1-max: 28.6;
    --font-size-md: calc(((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
    var(--fluid-bp));

    --f-2-min: 31.25;
    --f-2-max: 37.18;
    --font-size-lg: calc(((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
    var(--fluid-bp));

    --f-3-min: 39.06;
    --f-3-max: 48.33;
    --font-size-xl: calc(((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
    var(--fluid-bp));

    --f-4-min: 46.87;
    --f-4-max: 62.83;
    --font-size-2xl: calc(((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
    var(--fluid-bp));

    --f-5-min: 57.6;
    --f-5-max: 81.8;
    --font-size-3xl: calc(((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) *
    var(--fluid-bp));

    --f-6-min: 76.29;
    --f-6-max: 106.34;
    --font-size-4xl: calc(((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) *
    var(--fluid-bp));

    //--nav-height: 4vh;
    //--nav-width: 100vw;
    //
    //--sidebar-width: 20vw;
    //--sidebar-height: 100vh;
    //
    //--footer-height: 20rem;
    //--footer-width: 100vw;
    //
    //--main-height: calc(100vh - var(--nav-height));

  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  iframe {
    max-width: 100%;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    font-size: 1.4rem;
    line-height: 1.5;
    text-rendering: optimizeSpeed;

    background: var(--color-cream);
    padding: var(--space-base);
    color: var(--color-black);

  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }


  input,
  button,
  textarea,
  select {
    font: inherit;
  }


  header {
    display: block;
    margin-bottom: 2rem;
    height: 100%;
    width: 100%;
  }

  h1, h2 {
    font-family: ${props => props.theme.fonts.title};
  }

  h3, h4, h5, h6 {
    font-family: var(--font-sans);
  }

  p, ul, ol {
    font-family: var(--font-body);
    font-size: var(--font-size-base);
  }

  a {
    text-decoration: none;
    color: var(--color-crimson);
  }

  button {
    background-color: var(---color-salmon);
    border: none !important;
    border-radius: var(---border-radius-sm);
    padding: var(--space-12) var(--space-24);
  }

  .small-caps {
    font-size: var(--font-size-xs) !important;
    font-family: var(--font-sans);
    font-weight: 700;
    color: var(--color-gray-800);
    text-transform: uppercase;
    letter-spacing: 0.06rem;
  }

  .metadata span, span.metadata {
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
    color: var(--color-gray-600);
  }


  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  @media screen and (min-width: 1200px) {
    :root {
      --fluid-screen: calc(var(--fluid-max-width) * 1px);
    }
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .preloader__forwards {
    width: 100vw;
    height: 100vh;
    background-color: #10101a;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: grid;
    place-content: center;
  }

  .preloader__forwards__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .preloader__forwards__left {
    margin-right: 1rem;
  }

  .preloader__forwards__right {
    margin-left: 1rem;
    width: max-content;
    height: 4rem;
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to bottom,
      #10101a 5%,
      rgba(#10101a, 0) 30%);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &::after {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to top,
      #10101a 5%,
      rgba(#10101a, 0) 30%);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }


  .preloader__forwards__text {
    font-family: $font-tertiary;
    font-weight: bold;
    font-size: 2rem;
    line-height: 210%;
    letter-spacing: 0.19em;
    color: var(--color-white);
    animation: preloaderforwardsTextAnimation 15s forwards;
    animation-delay: 3s;
    height: 100%;
  }

  .preloader__forwards__text__stop {

  }

  @keyframes preloaderforwardsTextAnimation {
    0% {
      transform: translateY(0%);
    }
    50%, 100% {
      transform: translateY(-600%);
    }
    to {
      animation-play-state: paused;
    }
  }


  [data-collapsible="true"].bg-white + [data-collapsible="true"].bg-white {
  @apply pt-0 md: pt-0;
  }

  .article-layout {
    display: flex;
    flex-direction: column;
  }

  .search-layout,
  .article-layout,
  .article-list {
    max-width: 740px;
    padding: 40px 20px 100px 20px;
    position: relative;
  }

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


  .underline {
    display: inline-block;
    height: 0.1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0.5rem 0;
    padding: 0;
    background: var(--color-button);
    transition: animate 0.3s ease-in-out;
    transform-origin: left;
  }

  /*.underline::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: var(--color-secondary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }*/

  //.underline:hover::before {
  //  transform: scaleX(1);
  //}


  //body {
  //  background-color: var(--color-background);
  //  color: var(--color-text);
  //  font-family: Lyon, Georgia, serif;
  //  -webkit-font-smoothing: antialiased;
  //  background-repeat: no-repeat
  //}


  //footer {
  //  margin: 4rem 2rem 0 !important;
  //  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  //  text-align: center !important;
  //  padding: 4rem 1rem 0 !important;
  //}


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


  //html {
  //  font-size: 14px;
  //  -moz-font-feature-settings: "kern" 1, "onum" 1;
  //  -ms-font-feature-settings: "kern" 1, "onum" 1;
  //  -o-font-feature-settings: "kern" 1, "onum" 1;
  //  -webkit-font-feature-settings: "kern" 1, "onum" 1;
  //  font-feature-settings: "kern" 1, "onum" 1;
  //  font-kerning: normal
  //}


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
    //body {
    //  margin-left: calc(50vw - 5rem);
    //  padding: 4rem 2rem 0
    //}
    //
    //
    //footer {
    //  margin: 4rem 2rem 0;
    //  border-top: 1px solid rgba(0, 0, 0, 0.1);
    //  text-align: center;
    //  padding: 4rem 1rem 0
    //}


  }
`



export default GlobalStyles
