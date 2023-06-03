import { IconType } from 'react-icons/lib'
import { TiChartPie } from 'react-icons/ti'
import styled from 'styled-components'
import { motion } from 'framer-motion'



export const NavigationWrapper = styled.div`
  position: relative;
  z-index: 9990;
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

  li {
    will-change: width, margin;
    margin: 0 2rem;
    padding: 0;
    cursor: pointer;
    opacity: 0.5;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    font-weight: 700;
    font-size: 1.0rem;
    letter-spacing: 0.1rem;
    transition: all 0.4s ease;
  }

  li:hover {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }

  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`


export const LinkListItem = styled.a`

  color: cornsilk !important;

  width: fit-content;
  height: fit-content;
`

export const NavLogoItem = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 1rem;
  margin: 0 2rem;
  padding: 0;
  cursor: pointer;


  a {
    text-decoration: none;
    color: cornsilk !important;
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
    animation: logoLeftAnim 15s linear infinite;
    overflow: hidden;
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
  background: #1a1e23FF;

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
  background: var(--button-color);
  animation: logoLeftAnim 15s linear infinite;
  will-change: width, margin;
`

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


export const MobileNavigation = styled.div`
  display: none;
  position: fixed;
  // position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background-color: var(--interface-color);
  color: var(--color-senary);
  overflow-y: scroll;

`


export const ToggleButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`


export const ToggleButtonWrapper = styled.div`
@include centerContent;
  color: var(--color-gray);
  font-family: $font-tertiary;

  ${ToggleButton} {

  }
`

