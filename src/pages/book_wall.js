import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Navigation } from '../components/nav/Navigation.js'
import { Sidebar } from '../components/Sidebar.js'
import { Readings } from '/src/pages/api/Readings.js'
import {
		BookByline,
		BookAtrribution,
		BookCoverImage,
		BookTagline,
		BookPage,
		BookSubtitle,
		BookTitle
} from '../styles/BookStyledComponents.js'
import { ReadingWallBody, ReadingWallMain } from "../styles/ReadingWallStyledComponents.js";
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'
import { DescriptionParser } from '../tools/DescriptionParser.js'
import Footer from '../components/Footer';



export default function ReadingWall( forwardRef, open, toggle ) {
		const [ activeFeature, setActiveFeature ]   = useState( Readings[ 0 ] )
		const [ scrollPosition, setScrollPosition ] = useState()
		const navRef                                = useRef( { open, toggle } )
		const ref                                   = useRef( forwardRef )
		const [ activeReading, setActiveReading ]   = useState( Readings.find( ( book ) => book.id === 0 ) )


		useEffect( () => {
				let isMounted = true
				window.addEventListener( 'scroll', handleScroll )

				return () => {
						window.removeEventListener( 'scroll', handleScroll )
						isMounted = false
				}
		}, [] )


		const loadActiveReading = ( book ) => {
				if ( book === null && activeReading !== null ) {
						return
				} else if ( book !== null ) {
						setActiveReading( book )
				}
		}


		const handleScroll = () => {
				const observer = new IntersectionObserver( intersections => {
						intersections.forEach( ( intersection ) => {
								if ( intersection.intersectionRatio > 0.5 ) {
										loadActiveReading( Readings[ intersection.target.id ] )
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


		return (
				<DefaultLayout >
						<Navigation open = {open} toggle = {toggle} forwardRef = {ref} />

						<Head >
								<title >Book List</title >
						</Head >

						<ReadingWallBody >
								<Sidebar header = {activeReading.header} chapters = {activeReading.chapters} />
								<ReadingWallMain >

										<SectionTitle main >Reading List</SectionTitle >
										{Readings.map( ( book, index ) => {
												return (
														<ContentBlock key = {index} value = {book} id = {index} innerRef = {c => this.myRef = c} >

																{DescriptionParser( book )}
																<BookAtrribution >
																		<BookTitle >{book.header.title}</BookTitle >
																		<BookSubtitle >{book.header.subtitle}</BookSubtitle >
																		<BookByline >{book.author}</BookByline >
																</BookAtrribution >
																<BookCoverImage src = {book.cover} alt = {book.header.title} />
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
								</ReadingWallMain >
						</ReadingWallBody >

						<Footer />
				</DefaultLayout >
		)
}


const transition = {
		duration: 1,
		ease    : [ 0.6, 0.01, -0.05, 0.9 ],
}


const thumbnailVariants = {
		initial: { scale: 0.9, opacity: 0 },
		enter  : { scale: 1, opacity: 1, transition },
		exit   : {
				scale     : 0.5,
				opacity   : 0,
				transition: { duration: 1.5, ...transition },
		},
}


const frameVariants = {
		hover: { scale: 0.95 },
}


