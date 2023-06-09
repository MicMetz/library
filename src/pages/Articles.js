import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Articles } from '../../posts/data/Articles.js'
import DefaultLayout from '../components/Layouts/DefaultLayout.js'
import Footer from '../components/Layouts/Footer.js';
import Header from "../components/Layouts/Header.js";
import { Sidebar } from '../components/Sidebar.js'
import { DefaultBody, DefaultMain, SectionTitle } from '../styles/StyledComponents.js'



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
      <Header title = {'Articles'} />
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

    </DefaultLayout >
  );
}
