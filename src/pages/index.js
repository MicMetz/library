import React, { useEffect, useRef, useState } from 'react'
import { Current } from "../../posts/data/Current.js";
import Header from "../components/Layouts/Header.js";
import { Layout } from "../components/Layouts/Layout.js";
import { Sidebar } from "../components/Sidebar.js";
import { BookAtrribution, BookByline, BookCoverImage, BookSubtitle, BookTagline, BookTitle } from "../styles/BookStyledComponents.js";
import { ContentBlock, DefaultBody, DefaultMain, SectionTitle } from "../styles/StyledComponents.js";
import { DescriptionParser } from "../tools/DescriptionParser.js";


export default function Homepage() {
		const [ activeFeature, setActiveFeature ]   = useState( Current[ 0 ] )
		const [ scrollPosition, setScrollPosition ] = useState()
		const [ isToggleOpen, setIsToggleOpen ]     = useState( false )
		const [ isSidebarOpen, setIsSidebarOpen ]   = useState( false )

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


		return (
				<>
						{/* <motion.div
							ref = {ref}
							initial = {{ top: 0 }}
							animate = {controls}
							variants = {variants}
							id = "main-target-animation"
							className = "preloader__forwards"
							>
							<div className = "preloader__forwards__wrapper" >
							<motion.div
							initial = {{ x: -10, opacity: 0 }}
							animate = {{ x: 0, opacity: 1, transition: { ...transition } }}
							className = "preloader__forwards__left"
							>
							<Image src = {LogoHookWhite} alt = "Logo" style = {{ color: 'white' }} />
							</motion.div >
							<motion.div
							initial = {{ x: 10, opacity: 0 }}
							animate = {{ x: 0, opacity: 1, transition: { ...transition } }}
							className = "preloader__forwards__right"
							>
							<p className = "preloader__forwards__text" >Michael Metzger</p >
							<p className = "preloader__forwards__text" >There are decades</p >
							<p className = "preloader__forwards__text" >where nothing happens;</p >
							<p className = "preloader__forwards__text" >and there are weeks</p >
							<p className = "preloader__forwards__text" >where decades happen.</p >
							</motion.div >
							</div >
							</motion.div > */}
						<Header title = "Michael Metzger | Library" />
						<Layout >
								<DefaultBody >
										<Sidebar header = {activeFeature.header}
																			chapters = {activeFeature.chapters}
																			open = {isSidebarOpen} toggle = {setIsSidebarOpen}
																			/>
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
										</DefaultMain >
								</DefaultBody >

						</Layout >
				</ >
		)
}



const transition = ( { duration, ease } ) => {
		return {
				duration: duration || 1.5,
				ease    : ease || [ 0.87, 0.1, -0.13, 1 ]
		}
}


const variants = {
		visible: { top: '-100vh', transition: { ...transition, delay: 9 } },
		hidden : { opacity: 0, display: 'none' },
}



//
// export const getStaticProps = () => {
//
//   const data    = getLatestPosts();
//   const allPost = getAllPosts();
//   const feed    = generateRSSFeed(allPost)
//   fs.writeFileSync('public/rss.xml', feed.rss2());
//
//   return {
//     props: {
//       posts: data
//     }
//   }
// }
