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
  border-right: 1px solid #eee;
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

export const SideMenuOpened = styled(SideMenuClosed)`
  left: 0;
  top: calc(var(--nav-height));
  max-width: 55vw;
  min-height: fit-content;
  width: fit-content;
  padding: 1.5rem 2rem;
  border-right: 1px solid #f0f0f0;
  border-top: none;
  border-bottom: none;
  transition: all 0.7s ease-in-out;
`

export const SideMenuHeader = styled(SidebarHeader)`
  transition: all 0.7s ease-in-out;
  transform: rotate(0deg);
  position: relative;
  left: 0;
  top: 0;
  line-height: 1;
  width: fit-content;
  height: fit-content;
  margin: 0 1em;
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  justify-content: space-between;

  flex-direction: column;

  h1 {
    position: relative;
    //display: block;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 2rem;
  }

  h2 {
    position: relative;
    //display: block;
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
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

export const ToC = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;

  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #d3743a #f0f0f0;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;

  padding-bottom: 2rem;
  max-font-size: 1.125rem;
  font-family: "PitchWeb", Courier, monospace;

  ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 2.5rem 1.5rem;
  }

  a {
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

export const ToCHeader = styled.span`
  display: block;
  font-size: 1.75rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: 0;
  width: 100%;
  height: fit-content;
  padding: 2rem 1rem;
  z-index: 100;
  align-items: center;
  justify-content: center;

  text-decoration: underline;
  color: #d3743a;
`

export const ToCItem = styled.li`
  margin: 5rem 1rem;
  //padding: 1.5rem 0;
  position: relative;

  a {
    font-size: 1.125rem;
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

  a span {
    display: block;
    font-size: 0.75rem;
    color: transparent;
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

export const ContentBlock = styled.section`
  display: flex;
  //position: absolute;
  height: fit-content;
  width: 100%;
  margin: 10rem auto;
  padding: 0;


  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

`



export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.main ? '3rem' : '2rem'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  height: fit-content;
  color: #d3743a;
  max-width: 100%;
  background: linear-gradient(121.57deg, #171748 18.77%, rgba(0, 0, 0, 0.75) 60.15%);
  -webkit-background-clip: text;
  margin-top: 4rem;
  padding: ${(props) => props.main ? '1rem 0 0.5rem' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    //line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`
