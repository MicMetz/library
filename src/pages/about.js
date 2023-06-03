import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {Current} from './api/Current';
import Head from 'next/head';
import DefaultLayout from '../components/layouts/DefaultLayout';
import {Navigation} from '../components/nav/Navigation';
import {Sidebar} from '../components/Sidebar';
import {
  ContentBlock,
  DefaultBlockQuote,
  DefaultBody,
  DefaultMain,
  DefaultQuoteText,
  SectionTitle
} from '../styles/StyledComponents';
import Footer from '../components/Footer';
import {Readings} from './api/Readings';
import * as observer from 'react-intersection-observer';
import {motion} from 'framer-motion';




export default function About(forwardRef, open, toggle) {
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
        <title>About</title>
								<link rel = "icon" href = "/icons/logo-hook.svg" type = "image/svg" />
						</Head>
      <DefaultBody>
        <Sidebar header={'About'} open={open} toggle={toggle} forwardRef={ref} chapters={[]}/>
        <DefaultMain>
          <SectionTitle main>About it</SectionTitle>
          <SectionTitle>What is this?</SectionTitle>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            variants={{
              initial: {
                opacity: 0,
                y: 100
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.87, 0.1, -0.13, 1]
                }
              }
            }}
          >
            <ContentBlock>
              <DefaultBlockQuote>
                <DefaultQuoteText>
                  <span>&quot;There are decades</span>
                  <br/>
                  <span> where nothing happens;</span>
                  <br/>
                  <span>and there are weeks</span>
                  <br/>
                  <span>where decades happen.&quot;</span>
                </DefaultQuoteText>
              </DefaultBlockQuote>
            </ContentBlock>

          </motion.div>
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
