import { IconType } from 'react-icons/lib'
import { TiChartPie } from 'react-icons/ti'
import styled from 'styled-components'




export const NavigationActive = styled.div`

`

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-width: 100vw;

  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }

  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }

  //li:first-child {
  //  padding-left: 0;
  //  position: absolute;
  //  left: 0;
  //}
  //
  //li:nth-child(2) {
  //  padding-left: 8em;
  //}

`


export const NavigationListItem = styled.li`
  will-change: width, margin;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  font-size: 1.0rem;
  letter-spacing: 0.1rem;
  transition: all 0.4s ease;

  width: fit-content;
  height: fit-content;


  span {
    text-decoration: none;
    color: cornsilk !important;
    text-transform: uppercase;
  }

  &:hover {
    opacity: 1;

  }

  &:active {
    opacity: 1;

`

export const NavLogoItem = styled.li`
  display: inline-block;
  width: fit-content;
  top: 0;
  position: relative;
  padding-left: 1rem;

  a {
    text-decoration: none;
    color: #b2adad !important;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  svg {

  }

  span {
    font-size: 1.0rem;
    font-weight: 700;

  }

  @media (max-width <= 800px) {
    svg {

    }

    span {
      display: none;
    }
  }


  @media (max-width: 800px) {
    svg {

    }

    span {
      display: none;
    }
  }


  @media (max-width: 1024px) {
    svg {

    }

    span {
      display: none;
    }
  }

  @media (max-width > 800px) {
    svg {

    }

    span {
      display: block;
    }
  }
`


export const NavigationBar = styled.nav`
  display: flex;
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 100%;
  max-height: 4vh;
  margin-bottom: 4rem;
  background: #1A1E23FF !important;

  align-items: center;
  justify-content: space-around;
`


export const Underline = styled.ins`
  position: static;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2rem;
  //width: 100%;
  background: #FFD700FF;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: width, margin;
`

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


export const MobileNavigation = styled.div`

`


export const MobileNavigationDropdown = styled.div`
  display: none;
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100vh;

  background: #1A1E23FF !important;

  align-items: center;
  justify-content: space-around;


  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
  }

  @media ${props => props.theme.breakpoints.md} {
    display: flex;
  }
`
