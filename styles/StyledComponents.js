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

export const SideMenu = styled.nav`
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
  overflow-y: auto;

  h3 {
    font-family: Courier, monospace;
    font-size: 1rem;
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
  display: none;
  width: 40px;
  height: 40px;
  top: 20px;
  left: 46px;
  position: absolute;

  :hover {
    cursor: pointer;
  }

  :before, :after {
    content: '';
    width: 21px;
    height: 1px;
    background: #333;
    display: block;
    position: absolute;
    left: 5px;
    transition: all .2s ease-in-out;
  }

  :before {
    top: 4rem;
  }

  :after {
    top: 7rem;
  }

  &open {
    :before {
      transform: rotate(45deg);
      top: 4rem;
    }
  }

  &open {
    :after {
      transform: rotate(-45deg);
      top: 4rem;
    }
  }
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

export const SidebarHeader = styled.h3`
  font-family: Courier, monospace;
  font-size: 1rem;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const ToCItem = styled.li`
  margin: 2.5rem 1rem

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




