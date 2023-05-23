import Head from 'next/head'
import React, {useRef, useState} from 'react'
import Link from 'next/link'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import {Navigation} from '../components/nav/Navigation.js'
import {
  ContentBlock,
  DefaultBlockQuote,
  DefaultBody,
  DefaultMain,
  DefaultQuoteText,
  SectionTitle
} from '../styles/StyledComponents.js'
import Footer from '../components/Footer';
import {Sidebar} from '../components/Sidebar';
import {motion} from 'framer-motion';




export default function TheWall(forwardRef, open, toggle) {
  const [activeFeature, setActiveFeature]   = useState()
  const [scrollPosition, setScrollPosition] = useState()
  const navRef                              = useRef({open, toggle})
  const ref                                 = useRef(forwardRef)


  useEffect(() => {
    let isMounted = true
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      isMounted = false
    }
  }, [])

  const handleScroll = () => {
    const observer = new IntersectionObserver(intersections => {
      intersections.forEach((intersection) => {
        if (intersection.intersectionRatio > 0.5) {

          const id = intersection.target.getAttribute('id')
          setActiveFeature(`#${id}`)
        }
      })
    }, {
      threshold: [0.5]
    })


    document.querySelectorAll('section[id]').forEach((section) => {
      if (section !== null) {
        observer.observe(section)
      }
    })
  }

  const handleFeature = (index) => {
    setActiveFeature(index)
  }

  const handleNav = () => {
    navRef.current.toggle()
  }



  return (
    <DefaultLayout>
      <Navigation open={open} toggle={toggle} forwardRef={ref}/>
      <Head>
        <title>The Wall</title>
        <link rel="icon" href="/icons/favicon.svg"/>
      </Head>
      <DefaultBody>
        <Sidebar header={'About'} open={open} toggle={toggle} forwardRef={ref} chapters={[]}/>
        <DefaultMain>
          <SectionTitle main>The Wall</SectionTitle>

        </DefaultMain>
      </DefaultBody>
      <Footer/>
    </DefaultLayout>
  )
}



const transition = ({duration, ease}) => {
  return {
    duration: duration || 1.5,
    ease: ease || [0.87, 0.1, -0.13, 1]
  }
}
