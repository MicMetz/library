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
    left: 0 !important;
  }


`

export const NavigationListItem = styled.li`
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: width, margin;
  margin: 0 9rem 0 0;
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


    > Link > span {

    }


  }

  &Logo {

  }

`

export const NavLogoItem = styled(NavigationListItem)`
  display: inline-block;
  //margin: 0;
  left: 0;
  position: relative;
  //margin-left: -5rem;
  padding-right: 5rem;
  padding-left: 0.5rem;

  ${TiChartPie} {
    object-fit: contain;
    width: 100%;
    height: 100%;
    
    color: cornsilk !important;
  }

  
  // Minify to icon in mobile
  @media ${props => props.theme.breakpoints.sm} {
    display: none;
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

