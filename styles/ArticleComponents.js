import Image from 'next/image'
import styled from 'styled-components'

// export const ArticleByline = styled.

export const ArticleFeatured = styled.section`
  width: calc(40% + 4rem);
  order: 2;
  padding: 0 2rem;
`

export const ArticleFeaturedCoverImage = styled(Image)`
  display: block;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  border-radius: 2px 1px 1px 2px;
  mix-blend-mode: normal;
  box-shadow: 0 0 10px 0 rgba(40, 42, 47, 0.1), -10px 10px 24px 10px rgba(40, 42, 47, 0.05), -30px 40px 30px 0 rgba(40, 42, 47, 0.1), -10px 10px 10px -5px rgba(40, 42, 47, 0.1);
`

export const ArticleFeaturedCover = styled.section`
  width: calc(40% + 4rem);
  order: 2;
  padding: 0 2rem
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