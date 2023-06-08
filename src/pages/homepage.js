import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Navigation } from '../components/nav/Navigation.js'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Sidebar } from '../components/Sidebar.js'
import Image from 'next/image'
import {
		BookByline,
		BookAtrribution,
		BookCoverImage,
		BookDetails,
		BookTagline,
		BookSubtitle,
		BookTitle
} from '../styles/BookStyledComponents.js'
import { Current } from '/posts/data/Current.js'
import { ContentBlock, DefaultBody, DefaultMain, SectionTitle } from '../styles/StyledComponents.js'
import { DescriptionParser } from '../tools/DescriptionParser.js'
import Footer from '../components/Footer';



export default function Homepage( forwardRef, open, toggle ) {
		const [ activeFeature, setActiveFeature ]   = useState( Current[ 0 ] )
		const [ scrollPosition, setScrollPosition ] = useState()
		const navRef                                = useRef( { open, toggle } )
		const ref                                   = useRef( forwardRef )



		useEffect( () => {
				window.addEventListener( 'scroll', handleScroll )
				return () => {
						window.removeEventListener( 'scroll', handleScroll )
				}
		}, [] )


		const loadActiveReading = ( feature ) => {
				if ( feature === null && activeFeature !== null ) {
						return
				} else if ( feature !== null ) {
						setActiveFeature( feature )
				}
		}


		const handleScroll = () => {
				const observer = new IntersectionObserver( intersections => {
						intersections.forEach( ( intersection ) => {
								if ( intersection.intersectionRatio > 0.5 ) {
										loadActiveReading( Current[ intersection.target.id ] )
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


		return (
				<DefaultLayout >
						<Navigation open = {open} toggle = {toggle} forwardRef = {ref} />
						<Head >
								<title >Home</title >
						</Head >

						<DefaultBody >
								<Sidebar header = {activeFeature.header}
																	chapters = {activeFeature.chapters}
																	open = {open} toggle = {toggle}
																	forwardRef = {ref} />
								<DefaultMain >

										<SectionTitle main >Currently Reading</SectionTitle >
										{Current?.map( ( book, index ) => {

												return (
														<ContentBlock key = {index} value = {book} id = {index} >
																{DescriptionParser( book )}
																<BookAtrribution >
																		<BookTitle >{book.header.title}</BookTitle >
																		<BookSubtitle >{book.header.subtitle}</BookSubtitle >
																		<BookByline >{book.author}</BookByline >
																</BookAtrribution >
																<BookCoverImage src = {book.cover} alt = {book.header.title}  />
																<BookTagline >
																		<ul >
																				<li >
																						<a href = {book.link} target = "blank" >Read More</a >
																				</li >
																				{book.tags.map( ( tag, id ) => {
																						return (
																								<li key = {id} >
																										<a href = {tag.link} target = "blank" >{tag.name}</a >
																								</li >
																						)
																				} )}
																		</ul >
																</BookTagline >
														</ContentBlock >
												)
										} )}
								</DefaultMain >
						</DefaultBody >

						<Footer />
				</DefaultLayout >

		)
}

