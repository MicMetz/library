import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { SidebarHeader, SidebarMenuButtonOverlay, SideMenuClosed, SideMenuHeader, SideMenuOpened, TableOfContents, TableHeader, TableItem } from '../styles/SidebarStyledComponents.js'



export const Sidebar = ( { header, chapters } ) => {
  const [ menuOpen, setMenu ]               = useState( false )
  const [ activeChapter, setActiveChapter ] = useState()

  useEffect( () => {
    let isMounted = true
    if ( isMounted ) {
      setActiveChapter( window.location.hash.slice( 1 ) )
    }
    return () => { isMounted = false }
  }, [] )


  const toggleSidebar = ( event ) => {
    event.preventDefault()
    setMenu( !menuOpen )
  }

  return (
    <StyledSidebar >
      <SidebarMenuButtonOverlay onClick = {toggleSidebar} >
        {menuOpen ?
          <SideMenuOpened >
            <SideMenuHeader >
              <h1 >{header?.title}</h1 >
              <h2 >{header?.subtitle || header?.preamble}</h2 >
            </SideMenuHeader >
            <TableOfContents >
              <TableHeader >
                <h3 >Table of Contents</h3 >
              </TableHeader >
              <ul >
                {chapters?.map( ( { chapterTitle }, id ) => (
                  <TableItem key = {id} active = {activeChapter === id} >
                    <a href = {`#${id}`} >
                      <span ></span >
                      {chapterTitle}
                    </a >
                  </TableItem >
                ) )}
              </ul >
            </TableOfContents >
          </SideMenuOpened >
          :
          <SideMenuClosed >
            <SidebarHeader >
              <h1 >{header?.title}</h1 >
            </SidebarHeader >
          </SideMenuClosed >
        }
      </SidebarMenuButtonOverlay >
    </StyledSidebar >
  )
}



const StyledSidebar = styled.aside`
  width: fit-content;
  height: 100%;
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${( { theme } ) => theme.colors.sidebar};
  z-index: 100;
  transition: all 0.5s ease;
  overflow: hidden;

    // ${( { theme } ) => theme.mediaQueries.tablet} {
  //   width: 30%;
  //   height: 100%;
  // }
  //
    // ${( { theme } ) => theme.mediaQueries.desktop} {
  //   width: 20%;
  //   height: 100%;
  // }

`
