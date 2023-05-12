import styled from 'styled-components'




export const ArticleCover = styled.div`
  width: calc(40% + 4rem);
  order: 2;
  padding: 0 2rem;

  img {
    display: block;
    margin: 0 auto;
    width: auto;
    max-width: 28vw;
    max-height: calc(100vh - 12rem);
    object-fit: contain
  }

`

export const SideMenuClose = styled.header`
  position: absolute;
  text-align: center;
  padding: 1.5rem 1rem;
  background-color: white;
  z-index: 100;


  h1 {
    text-transform: uppercase;
  }

  h2 {
    display: none;
  }

  h1, h2 {
    font-size: 1rem;
    font-weight: normal;
    display: inline;
    margin: 0;
  }

`

export const SideMenuOpen = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: 100vh;
  z-index: 100;
  transform: translateX(50%);
  transition: transform 0.3s ease-in-out;


  h3 {
    font-family: Courier, monospace;
    font-size: 0.8rem;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto
  }

  h3:after {
    content: '';
    display: block;
    width: 4rem;
    border-bottom: 1px solid #ddd;
    margin: 2rem auto
  }
`

export const SidebarMenuButton = styled.button`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  border: none;

`

export const ToC = styled.ul`
  list-style: none;

  li {
    margin: 2.5rem 1rem;
  }

  a {
    font-size: 1.125rem;
    background-image: none;
  }

  a:hover {

  }

  a span {
    display: block;
    font-size: 0.75rem;
    font-family: Courier, monospace;
    color: rgba(0, 0, 0, 0.5);
  }
`

export const ArticleSidebarHeader = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  text-after-overflow: '...';
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  max-height: 3rem;
  height: fit-content;
  cursor: none;
  margin: 0 1rem;

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
  }
`

export const SidebarHeader = styled.h3`
  font-family: Courier, monospace;
  font-size: 2rem;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const ToCItem = styled.li`
  margin: 2.5rem 1rem;

  h3 {
    font-size: 1.125rem;
    line-height: 0.75rem;
  }
`

export const ArticleContainer = styled.article`
  margin: 2rem auto;
  padding: 0 2rem;

  blockquote {
    margin: 4rem auto;
    font-style: italic;
  }

  img {
    max-width: 100%;
  }

  img:first-child {
    mix-blend-mode: multiply
  }

  ul {
    font-family: Courier, monospace;
    list-style: disc;
    max-width: 30rem;
    margin: 3rem auto;
    font-size: 1.25rem;
    -webkit-font-smoothing: subpixel-antialiased !important;
    -moz-osx-font-smoothing: auto;
  }

  ul li {
    padding-left: 1rem;
  }


  blockquote cite {
    display: block;
    font-style: normal;
    text-transform: uppercase;
    font-size: 80%;
    letter-spacing: 0.05em;
  }


  h2 {
    margin: 4rem auto 2rem;
    color: #d3743a
  }

  h2 span {
    color: #374151;
    display: block;
    font-size: 1.05rem;
    font-family: Courier, monospace;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h3 {
    margin: 0 auto 0;
  }


  p, h2, h3 {
    margin: 0 auto;
    max-width: 30em;
    font-size: 20px;
    line-height: 30px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.001em;
    word-spacing: 0.005em
  }

`




