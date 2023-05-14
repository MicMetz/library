import styled from 'styled-components'




export const NavigationActive = styled.div`
  position: absolute;
  bottom: 0;
  background: cornsilk;
  width: fit-content;
  height: 0.2rem;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: width, margin;
`

export const NavigationList = styled.ul`
  display: flex;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavigationListItem = styled.li`
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: width, margin;
  margin: 0 3rem 0 0;
  padding: 0;
  cursor: pointer;

  text-decoration: none;
  text-color: white;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  
  
  Link, a {
    text-decoration: none;
    color: white !important;
    text-transform: uppercase;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }

  &:last-child {
    margin-right: 0;
  }
  
  &:first-child {
    margin-left: 0;
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

