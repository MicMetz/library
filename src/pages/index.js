import {useRouter} from 'next/router'
import React, {Component, useEffect, useMemo, useRef, useState} from 'react'
import Head from 'next/head'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import {Navigation} from '../components/nav/Navigation.js'
import {useHasBeenViewed} from '../tools/useIntro.js'
import Homepage from './Homepage.js'
import Reading_room from './reading_room.js'
import {inView, motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'



export default function Index({page, navigation, settings}) {
  const router                          = useRouter()
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const controls                        = useAnimation()
  const [ref, inView]                   = useInView()
  let firstLoad                         = false

  useEffect(() => {
    if (firstLoad === false) {
      firstLoad = true
      setTimeout(() => {
        controls.start('hidden')
      }, 1000)
    }
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('disabled')
    }
  }, [controls, inView])


  function toggleBodyScroll(isToggleOpen) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true)
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false)
    }
  }


  return (
    <>
      <motion.div
        ref={ref}
        initial={{top: 0}}
        animate={controls}
        variants={variants}
        id="main-target-animation"
        className="preloader__forwards"
      >
        <div className="preloader__forwards__wrapper">
          <motion.div
            initial={{x: -10, opacity: 0}}
            animate={{x: 0, opacity: 1, transition: {...transition}}}
            className="preloader__forwards__left"
          >
            <img src="/icons/logo.svg" alt="logo"/>
          </motion.div>
          <motion.div
            initial={{x: 10, opacity: 0}}
            animate={{x: 0, opacity: 1, transition: {...transition}}}
            className="preloader__forwards__right"
          >
            <p className="preloader__forwards__text">Michael Metzger</p>
            {/*<p className="preloader__forwards__text">Kill</p>*/}
            {/*<p className="preloader__forwards__text">Your</p>*/}
            {/*<p className="preloader__forwards__text">Self</p>*/}
            {/*<p className="preloader__forwards__text">Kill Your Self</p>*/}

          </motion.div>
        </div>
      </motion.div>
      <Homepage isOpen={isToggleOpen} toggleOpen={() => toggleBodyScroll(isToggleOpen)} contentRef={ref}/>
    </ >
  )
}



const transition = ({duration, ease}) => {
  return {
    duration: duration || 1.5,
    ease: ease || [0.87, 0.1, -0.13, 1]
  }
}


const variants = {
  visible: {top: '-100vh', transition: {...transition, delay: 9}},
  hidden: {opacity: 0, display: 'none'},
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
