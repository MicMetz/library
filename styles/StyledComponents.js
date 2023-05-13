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

export const SideMenuClosed = styled.div`
  padding: 1.5rem 1rem;
  background-color: white;
  z-index: 100;
  position: fixed;
  top: 0;
  left: -2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;

  width: 7rem;
  max-width: 20vw;
  border-right: 1px solid #eee;
  height: 100vh;
`

export const SidebarHeader = styled.header`
  transform: rotate(90deg);
  transform-origin: top left;
  left: 4rem;
  top: calc(50vh - 12rem);
  line-height: 1;
  height: 2em;
  width: 25rem;

  align-items: center;
  justify-content: center;


  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    text-after-overflow: '...';
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    text-after-overflow: '...';
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
`

export const SideMenuOpened = styled(SideMenuClosed)`
  left: 0;
  max-width: 50vw;
  width: fit-content;
  padding: 1.5rem 2rem;
  border-right: 1px solid #f0f0f0;
  border-top: none;
  border-bottom: none;
  overflow-y: auto;

  transition: all 0.7s ease-in-out;
`

export const SideMenuHeader = styled(SidebarHeader)`
  transition: all 0.7s ease-in-out;
  transform: rotate(0deg);
  position: relative;
  left: 0;
  top: 0;
  line-height: 1;
  width: 100%;
  height: 3rem;
  margin: 0 1em;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;

  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`

export const SidebarMenuButtonOverlay = styled.button`
  position: absolute;
  width: fit-content;
  height: 100vh;
  transition: opacity 0.3s ease-in-out;
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
    font-family: "PitchWeb", Courier, monospace;
    color: rgba(0, 0, 0, 0.5);
  }
`

export const MenuHeader = styled.div`
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

export const SideMenuHeaderOpen = styled.header`
  display: none;
  font-family: "PitchWeb", Courier, monospace;
  font-size: 2rem;
  text-transform: uppercase;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const ToCItem = styled.li`
  margin: 2.5rem 1rem;


  a {
    font-size: 1.125rem;
    background-image: none;
  }

  a:hover {

  }

  a span {
    display: block;
    font-size: 0.75rem;
    font-family: "PitchWeb", Courier, monospace;
    color: rgba(0, 0, 0, 0.5);
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
    font-family: "PitchWeb", Courier, monospace;
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
    font-family: "PitchWeb", Courier, monospace;
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

export const PageHeader = styled.header`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 30rem;
  text-align: center;
`

export const PageHeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`



