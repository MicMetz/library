import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
		SidebarHeader,
		SidebarMenuButtonOverlay,
		ToC,
		ToCItem,
		SideMenuClosed,
		SideMenuOpened,
		SideMenuHeader,
		ToCHeader
} from '../styles/SidebarStyledComponents.js'



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
		)
}
