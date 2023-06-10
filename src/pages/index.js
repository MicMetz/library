import LogoHookWhite from '/public/icons/logo-hook-white.svg'
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Current } from "../../posts/data/Current.js";
import Header from "../components/Layouts/Header.js";
import { Layout } from "../components/Layouts/Layout.js";
import { Spacer } from "../components/MISC/Spacer.js";
import { Sidebar } from "../components/Sidebar.js";
import SplashScreen from "../components/Splash.js";
import { BookAtrribution, BookByline, BookCoverImage, BookSubtitle, BookTagline, BookTitle } from "../styles/BookStyledComponents.js";
import { ContentBlock, DefaultBody, DefaultMain, SectionTitle } from "../styles/StyledComponents.js";
import { DescriptionParser } from "../tools/DescriptionParser.js";



let animation;

export default function Homepage() {
  const [ activeFeature, setActiveFeature ]   = useState( Current[ 0 ] )
  const [ scrollPosition, setScrollPosition ] = useState()
  const [ isToggleOpen, setIsToggleOpen ]     = useState( false )
  const [ isSidebarOpen, setIsSidebarOpen ]   = useState( false )
  const container = useRef( null );


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
      <Header title = "Michael Metzger | Library" />
      <SplashScreen forwardRef = {container} />
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

        <Spacer size = "3xlarge" />
      </Layout >
    </ >
  )
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
