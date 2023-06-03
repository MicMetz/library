import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation } from '../components/nav/Navigation.js'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Sidebar } from '../components/Sidebar.js'
import { DefaultBody, DefaultMain, SectionTitle } from '../styles/StyledComponents.js'
import { Articles } from './api/Articles.js'
import Footer from '../components/Footer';



export default function ArticlesRoom( forwardRef, open, toggle ) {
		const [ activeFeature, setActiveFeature ]   = useState( Articles[ 0 ] )
		const [ scrollPosition, setScrollPosition ] = useState()
		const navRef                                = useRef( { open, toggle } )
		const ref                                   = useRef( forwardRef )


		useEffect( () => {
				window.addEventListener( 'scroll', handleScroll )
				return () => {
						window.removeEventListener( 'scroll', handleScroll )
				}
		}, [] )

		const handleScroll = () => {
				const observer = new IntersectionObserver( intersections => {
						intersections.forEach( ( intersection ) => {
								if ( intersection.intersectionRatio > 0.5 ) {
										loadActiveArticle( Articles[ intersection.target.id ] )
								}
						} )
				}, {
						threshold: 0.5
				} )

				document.querySelectorAll( 'section[id]' ).forEach( ( section ) => {
						if ( section !== null ) {
								observer.observe( section )
						}
				} )
		}


		const handleFeature = ( index ) => {
				setActiveFeature( index )
		}


		const handleNav = () => {
				navRef.current.toggle()
		}


		const loadActiveArticle = ( feature ) => {
				if ( feature === null && activeFeature !== null ) {
						return
				} else if ( feature !== null ) {
						setActiveFeature( feature )
				}
		}



		return (
				<DefaultLayout >
						<Navigation open = {open} toggle = {toggle} forwardRef = {ref} />

						<Head >
								<title >Article Room</title >
								<meta name = "" content = "initial-scale=1.0, width=device-width" />
								<link rel = "icon" href = "/icons/logo-hook.svg" />
						</Head >
						<DefaultBody >
								<Sidebar
										// header = {'Articles'}
										header = {activeFeature.header}
										chapters = {[]}
										open = {open}
										toggle = {toggle}
										forwardRef = {ref} />
								<DefaultMain >
										<SectionTitle main >Recent Articles</SectionTitle >

								</DefaultMain >
						</DefaultBody >

						<Footer />
				</DefaultLayout >
		);
}
