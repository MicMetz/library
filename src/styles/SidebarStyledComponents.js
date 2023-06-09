import styled from 'styled-components'



export const SideMenuClosed = styled.div`
  padding: 1.5rem 1rem;
  background-color: white;
  z-index: 100;
  position: fixed;
  top: calc(0 + var(--nav-height + 1rem));
  left: -2rem;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;

  width: 7rem;
  max-width: 20vw;
  border-right: 1px solid rgba(93, 88, 88, 0.26);
  height: 100vh;
`

export const SidebarHeader = styled.header`
  transform: rotate(90deg);
  transform-origin: top left;
  left: 4rem;
  top: calc(50vh - 12rem);
  line-height: 1;
  width: 25rem;
  height: 2em;

  padding: 1.5rem 1rem;
  z-index: 100;
  align-items: center;
  justify-content: center;


  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    text-after-overflow: '...';
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    text-after-overflow: '...';
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
`

export const SideMenuOpened = styled( SideMenuClosed )`
  left: 0;
  top: 0;
  min-width: var(--sidebar-width);
  max-width: 55vw;
  min-height: fit-content;
  width: 100%;
  padding: 1.5rem 2rem;
  border-right: 1px solid rgba(93, 88, 88, 0.26);
  border-top: none;
  border-bottom: none;
  transition: all 0.7s ease-in-out;
`

export const SideMenuHeader = styled( SidebarHeader )`
  transition: all 0.7s ease-in-out;
  transform: rotate(0deg);
  position: relative;
  left: 0;
  top: 0;
  line-height: 1;

  max-width: calc(var(--sidebar-width) - 4rem);
  width: 100%;
  height: fit-content;
  margin: 0 1em;
  display: flex;
  padding: 1.5rem 0.5rem;

  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-transform: uppercase;


  h1 {
    max-font-size: 2rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }

  h2 {
    position: relative;
    max-font-size: 1.4rem;
    font-weight: 400;
  }
`

export const SidebarMenuButtonOverlay = styled.button`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: calc(var(--nav-height));

  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
`

export const TableOfContents = styled.div`
  margin: auto 0;
  width: 100%;
  height: 100vh;
  position: relative;

  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #d3743a #f0f0f0;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  padding-bottom: 2rem;
  font-family: "PitchWeb", Courier, monospace;

  ul {
    width: 100%;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
  }

  a {
    background-image: none;
  }

  a:hover {

  }
`

export const TableHeader = styled.span`
  display: block;
  text-align: center;

  top: 0;
  margin: 0 auto;
  padding: 2rem 1rem;

  position: relative;
  height: fit-content;
  width: 100%;

  align-items: center;
  justify-content: center;

  text-decoration: underline;
  color: #d3743a;

  h3 {
    max-font-size: 2.75em;
    font-weight: 600;
    font-size: 1.5em;

    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    text-after-overflow: '...';
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
`

export const TableItem = styled.li`
  margin: 5rem 1.5rem;
  padding: 0.5rem 0;
  position: relative;

  a {
    max-font-size: 1.225rem;
    font-size: 1.225rem;
    font-weight: 400;
    background-image: none;
  }

  a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.125rem;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    background-color: #d3743a;
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }

  a:hover {
    //text-decoration: underline;
    //color: #d3743a;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
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
