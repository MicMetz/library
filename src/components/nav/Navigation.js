import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TiChartPie } from 'react-icons/ti'
import styled from 'styled-components'
import {
		MobileNavigation,
		NavigationBar,
		NavigationList,
		LinkListItem,
		NavigationWrapper,
		NavLogoItem,
		ToggleButton,
		ToggleButtonWrapper,
		NavLink
} from '../../styles/NavigationStyledComponents.js'
import { MenuItem } from './MenuItem.js'
import { MobileNavigationbar } from './MobileNavigation.js'



const variants = {
		open  : {
				left        : 0,
				pointerEvent: 'none',
				transition  : {
						duration: 1,
						ease    : [ 0.87, 0, 0.13, 1 ]
				}
		},
		closed: {
				left        : '-100%',
				pointerEvent: 'none',
				transition  : {
						duration: 1,
						ease    : [ 0.87, 0, 0.13, 1 ]
				}
		}
}

const Path = ( props ) => (
		<motion.path
				fill = "transparent"
				strokeWidth = "1.5"
				stroke = "#c4c4c4"
				{...props}
		/>
)

export const Navigation = ( forwardRef, open, toggle ) => {
		const router                 = useRouter()
		const [ isOpen, toggleOpen ] = useCycle( open, toggle )
		const ref                    = useRef( forwardRef )

		useEffect( () => {

				return () => {
				}
		}, [] )


		return (
				<NavigationWrapper
						initial = {false}
						animate = {isOpen ? 'open' : 'closed'}
						mobile = {false}
						ref = {ref}
				>

						<NavigationBar
								data-scroll
								data-scroll-sticky
								data-scroll-target = "nav" id = "nav"
						>
								<NavigationList >
										<NavLogoItem >
												<NavLink href = "https://micmetz.github.io" >
														<TiChartPie size = "1.5em" />
														<span >
																{'Michael Metzger'}
														</span >
												</NavLink >
										</NavLogoItem >
										<MenuItem i = {0} text = "Home" link = "/" />
										<MenuItem i = {1} text = "Books" link = "/book_wall" />
										<MenuItem i = {2} text = "Articles" link = "/article_wall" />
										<MenuItem i = {3} text = "Essays" link = "/writing_wall" />
										<MenuItem i = {4} text = "About" link = "/about" />
								</NavigationList >
						</NavigationBar >
						<MobileNavigationbar variants = {variants} isOpen = {isOpen} isMobile = {false} />
				</NavigationWrapper >

		)

}





