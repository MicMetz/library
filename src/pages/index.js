import { useRouter } from 'next/router'
import React, { Component, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Navigation } from '../components/Navigation.js'
import Homepage from './Homepage.js'
import Reading_room from './reading_room.js'
import { motion, useInView } from 'framer-motion'




const useHasBeenViewed = () => {
  const { ref, inView } = useInView({
    threshold: .8
  })
  const prevInView      = useRef(false)
  const hasBeenViewed   = prevInView.current || inView
  useEffect(() => {
    prevInView.current = inView
  })

  return [hasBeenViewed, ref]
}

const transition = ({ duration, ease }) => {
  return {
    duration: duration || 1.5,
    ease    : ease || [0.87, 0.1, -0.13, 1]
  }
}

export default function Index ({ page, navigation, settings }) {
  const router                          = useRouter()
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const refScroll                       = useRef(null)
  const [hasBeenViewed, ref]            = useHasBeenViewed()
  // const showAnimation                   = useIntro()
  // const { ref, inView }                 = useInView({
  //   threshold: .8
  // })


  // if (error) console.log(error);


  function toggleBodyScroll (isToggleOpen) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true)
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false)
    }
  }



  useEffect(() => {

    if (!refScroll.current) {
      return
    }


    window.addEventListener('load', () => {
      let image      = document.querySelector('img')
      const isLoaded = ( image?.complete && image?.naturalHeight !== 0 )
    })

    // header cursor
    const cursor       = document.querySelector('.cursor')
    window.onmousemove = (e) => {
      cursor?.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`)
    }
    // image hover effect
    Array.from(document.querySelectorAll('.content')).forEach(
      (el) => {
        const imgs = Array.from(el.querySelectorAll('img'))
        imgs.forEach((img) => {
            img.addEventListener('mouseenter', () => {
              cursor.classList.add('activeImg')
            })
            img.addEventListener('mouseleave', () => {
              cursor.classList.remove('activeImg')
            })
          }
        )

      })

  }, [])

  return (
    <div className = "flex flex-col justify-between h-screen" data-scroll-container ref = {refScroll} id = "main-target">
      <motion.div
        ref = {ref}
        initial = "hidden"
        viewport = {{ once: true }}
        data-scroll
        data-scroll-sticky
        data-scroll-target = "#main-target"
        animate = {{ top: '-100vh', transition: { ...transition, delay: 9 } }}
        // animate = {{ top: '-100vh', transition: { ...transition, delay: 9 } }}
        variants = {{
          visible: { opacity: 1, scale: 1 },
          hidden : { opacity: 0, scale: 0 }
        }}
        className = "preloader__forwards"
        // afterchildren = {() => {
        //   document.querySelector('.preloader__forwards').style.display = 'none'
        // }}
      >
        <div className = "preloader__forwards__wrapper">
          <motion.div
            initial = {{ x: -10, opacity: 0 }}
            animate = {{ x: 0, opacity: 1, transition: { ...transition } }}
            className = "preloader__forwards__left"
          >
            <img src = "/static/icons/logo.svg" alt = "logo"/>
          </motion.div >
          <motion.div
            initial = {{ x: 10, opacity: 0 }}
            animate = {{ x: 0, opacity: 1, transition: { ...transition } }}
            className = "preloader__forwards__right"
          >
            <p className = "preloader__forwards__text">Michael Metzger</p >
            <p className = "preloader__forwards__text">Architektur</p >
            <p className = "preloader__forwards__text">Des</p >
            <p className = "preloader__forwards__text">Geistes</p >
            <p className = "preloader__forwards__text"></p >
            <p className = "preloader__forwards__text">Architecture of the mind</p >

            {hasBeenViewed}
          </motion.div >
        </div >
      </motion.div >
      <div className = "cursor"></div >
      <DefaultLayout >
        <Navigation isOpen = {isToggleOpen} toggleOpen = {() => toggleBodyScroll(isToggleOpen)}/>
        <Homepage />
      </DefaultLayout >
    </div >
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
