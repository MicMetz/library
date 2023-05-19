import Image from 'next/image'
import styled from 'styled-components'




export const ArticlePage = styled.section`
  display: flex;
  position: relative;
  max-width: 70rem;
  top: calc(100vh - 50rem);
  min-height: 100vh;
  width: 100%;
  margin-bottom: 9rem;
  padding: 4rem 0 4rem 0;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 0 10px 0 transparentization(black, 0.9), 0 0 0 4px transparentization(black, 0.85);
  $zease: cubic-bezier(0.165, 0.84, 0.44, 1);


  [data-scroll] {
    opacity: 0;
    transform: translateY(4rem) scale(0.95);
    //transition: transform 0.5s, opacity 0.5s;
    transition: all 0.5s $zease;
    will-change: transform, scale, opacity;
  }

  [data-scroll="in"] {
    .content:after {
      transform: scaleY(0);
      opacity: 1;
    }

    opacity: 1;
    transform: translateY(0) scale(1);
  }

  [data-scroll-direction="up"] {
    [data-scroll="in"] {
      transform: translateY(-4rem) scale(0.95);

      .content:after {
        transform: scaleY(1);
        opacity: 0;
      }

      opacity: 0;

    }
  }

  transparentization($color, $amount) {
  rgba($color, $amount);
}


`

export const ArticleFeaturedFooter = styled.footer`
  max-width: 100%;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 0.5rem 1rem 0;
  border-top: none;
  font-family: 'PitchWeb', Courier, monospace

`

export const ArticleFeaturedDetails = styled.div`
  display: inline-block;
  position: relative;

  max-width: 40%;
  order: 1;
  padding: 0 2rem;
  text-align: left;
  margin-top: 8rem;
  margin-right: 6rem;
  width: 100%;
  height: 100%;

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }
`

export const ArticleFeaturedAtrribution = styled.div`
  display: inline-block;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-top: 5rem;

  position: relative;
  max-width: calc(100vw - 80vw);
  //top: calc(0 + 10rem);
  padding: 0 2rem;
  order: 3;
`

export const ArticleFeaturedCoverImage = styled.img`
  display: inline-block;
  position: relative;

  margin: 6rem auto;

  width: 100%;
  height: 100%;
  max-width: 35%;

  max-height: calc(100vh - 18rem);
  border-radius: 2px 1px 1px 2px;
  mix-blend-mode: normal;
  box-shadow: 0 0 10px 0 rgba(40, 42, 47, 0.1), -10px 10px 24px 10px rgba(40, 42, 47, 0.05), -30px 40px 30px 0 rgba(40, 42, 47, 0.1), -10px 10px 10px -5px rgba(40, 42, 47, 0.1);
  order: 2;
`


export const ArticleTitle = styled.h1`
  font-size: 3.5rem;
  margin: 2rem 0;
  font-family: Courier, monospace;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`


export const ArticleSubtitle = styled.h2`
  font-size: 2rem;
  margin: 2rem 0;
  font-family: Courier, monospace;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const ArticleByline = styled.p`
  font-size: 1.125rem;
  font-family: Courier, monospace;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0 2rem;
`

export const ArticleContent = styled.section`
  width: 100%;
  order: 1;
  padding: 0 2rem;
  margin: 2rem 0;

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 2rem 0;
    text-indent: 2rem;
  }

  p:first-child {
    text-indent: 1em;
  }

  p.block {
    text-indent: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p.caption {
    font-family: Courier, monospace;
    font-size: 1rem;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    text-align: center;
    margin: 2rem 0;
  }

  p.caption span {
    display: block;
    font-size: 0.75rem;
    font-family: Courier, monospace;
    color: rgba(0, 0, 0, 0.5);
  }

  p.blockquote {
    font-style: italic;
    margin: 4rem auto;
  }

  p.blockquote span {
    display: block;
    font-size: 0.75rem;
    font-family: Courier, monospace;
    color: rgba(0, 0, 0, 0.5);
  }

  p.blockquote span:before {
    content: '— ';
    margin-left: 0;

  }

  p.blockquote span:after {
    content: ' —';
    margin-right: 0;

  }

  p.blockquote span:before, p.blockquote span:after {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 1;
    vertical-align: middle;
    margin: 0 0.5rem;
  }


  h2 {
    font-size: 2rem;
    margin: 2rem 0;
    font-family: Courier, monospace;
    font-weight: 400;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h3 {
    font-size: 1.5rem;
    margin: 2rem 0;
    font-family: Courier, monospace;
    font-weight: 400;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h4 {
    font-size: 1.25rem;
    margin: 2rem 0;
    font-family: Courier, monospace;
    font-weight: 400;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h5 {
    font-size: 1.125rem;
    margin: 2rem 0;
    font-family: Courier, monospace;
    font-weight: 400;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }


  ul {
    margin: 2rem 0;
    padding-left: 2rem;
  }

  ul li {
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 2rem 0;
    text-indent: 2rem;
  }

  ul li:first-child {
    text-indent: 1em;
  }

  ol {
    margin: 2rem 0;
    padding-left: 2rem;
  }

  ol li {
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 2rem 0;
    text-indent: 2rem;
  }

  ol li:first-child {
    text-indent: 1em;
  }

  ol li:before {
    content: counter(item) '. ';
    counter-increment: item;
    font-family: Courier, monospace;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 1rem;
  }

  ol li:first-child:before {
    content: counter(item) '. ';
    counter-increment: item;
    font-family: Courier, monospace;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 1rem;
  }

  ol li:last-child:before {
    content: counter(item) '. ';
    counter-increment: item;

    font-family: Courier, monospace;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);

    margin-right: 1rem;
  }


  hr {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
  }

`
