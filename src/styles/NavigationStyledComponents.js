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

  li:first-child {
    padding-left: 0;
    position: absolute;
    left: 0; 
  }
  
  li:nth-child(2) {
    padding-left: 8em;
  }
  


`

export const NavigationListItem = styled.li`
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: width, margin;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;


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

export const NavLogoItem = styled(NavigationListItem)`
  display: flex;
  //margin: 0;
  //margin-left: -5rem;

  ${TiChartPie} {
    object-fit: contain;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    position: relative;

    color: cornsilk !important;
  }

  span {
    font-size: 1.0rem;
    font-weight: 700;
    text-transform: uppercase;


  }


  // Minify to icon in mobile
  @media (max-width <= 800px) {
    ${TiChartPie} {
      width: 100%;
      height: 100%;
    }

    span {
      display: none;
    }
  }


  @media (max-width: 800px) {
    ${TiChartPie} {
      width: 100%;
      height: 100%;
    }

    span {
      display: none;
    }
  }


  @media (max-width: 1024px) {
    ${TiChartPie} {
      width: 100%;
      height: 100%;
    }

    span {
      display: none;
    }
  }

  @media (max-width > 800px) {
    ${TiChartPie} {
      width: 100%;
      height: 100%;
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
  width: 100vw;
  height: 100%;
  max-height: 4vh;
  margin-bottom: 4rem;
  background: #1A1E23FF !important;

  align-items: center;
  justify-content: center;


`

