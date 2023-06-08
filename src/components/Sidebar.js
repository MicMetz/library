import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { SidebarHeader, SidebarMenuButtonOverlay, SideMenuClosed, SideMenuHeader, SideMenuOpened, ToC, ToCHeader, ToCItem } from '../styles/SidebarStyledComponents.js'



export const Sidebar = ( { header, chapters } ) => {
		const [ menu, setMenu ]                   = useState( false )
		const [ activeChapter, setActiveChapter ] = useState()

		useEffect( () => {
				let isMounted = true
				if ( isMounted ) {
						setActiveChapter( window.location.hash.slice( 1 ) )
				}
				return () => { isMounted = false }
		}, [] )



		return (
				<StyledSidebar >
						<SidebarMenuButtonOverlay onClick = {() => setMenu( !menu )} >
								{menu ?
										<SideMenuOpened >
												<SideMenuHeader >
														<h1 >{header?.title}</h1 >
														<h2 >{header?.subtitle || header?.preamble}</h2 >
												</SideMenuHeader >
												<ToC >
														<ToCHeader >
																<h3 >Table of Contents</h3 >
														</ToCHeader >
														<ul >
																{chapters?.map( ( { chapterTitle }, id ) => (
																		<ToCItem key = {id} active = {activeChapter === id} >
																				<a href = {`#${id}`} >
																						<span ></span >
																						{chapterTitle}
																				</a >
																		</ToCItem >
																) )}
														</ul >
												</ToC >
										</SideMenuOpened >
										:
										<SideMenuClosed >
												<SidebarHeader >
														<h1 >{header?.title}</h1 >
														{/* <h2 >{header?.subtitle}</h2 > */}
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
