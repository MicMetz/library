import React, {useContext, useEffect, useRef, useState} from 'react'
import {motion, useCycle} from 'framer-motion'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {TiChartPie} from 'react-icons/ti'
import styled from 'styled-components'
import {
  MobileNavigation,
  NavigationBar,
  NavigationList,
  NavigationListItem,
  NavigationWrapper,
  NavLogoItem,
  ToggleButton,
  ToggleButtonWrapper
} from '../../styles/NavigationStyledComponents.js'
import {MenuItem} from './MenuItem.js'
import {MobileNavigationbar} from './MobileNavigation.js'




const variants = {
  open: {
    left: 0,
    pointerEvent: 'none',
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1]
    }
  },
  closed: {
    left: '-100%',
    pointerEvent: 'none',
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1]
    }
  }
}

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.5"
    stroke="#c4c4c4"
    {...props}
  />
)

export const Navigation = (forwardRef, open, toggle) => {
  const router = useRouter()
  const [isOpen, toggleOpen] = useCycle(open, toggle)
  const ref = useRef(forwardRef)

  useEffect(() => {

    return () => {
    }
  }, [])


  /*
   const [href, setHref]         = useState()
   const [showMenu, setShowMenu] = useState(false)
   var activeItem         = null
   var underline          = null
   var activeItemPosition = 0
   var activeItemWidth    = 0
   const handleRoute = (ref) => {

   var nav = document.getElementById('nav')
   var e   = document.getElementById(`${ref}`)
   // console.log(e)

   // nav.addEventListener('click', (e) => {

   if (!nav.classList.contains('animate')) {
   // console.log('clicked')
   // if (!e.classList.contains('active') && e.tagName === 'li' && !nav.classList.contains('animate')) {
   nav.classList.add('animate')
   let position = e.getBoundingClientRect()
   let width    = e.style.width
   if (position.left >= activeItemPosition) {
   underline.animate({
   width: ( ( position.left - activeItemPosition ) + width )
   }, 400, () => {
   underline.animate({
   left : position.left,
   width: width
   }, 200, () => {
   nav.classList.remove('animate')
   })
   e.classList.add('active')
   })
   } else {
   underline.animate({
   left : position.left,
   width: ( ( activeItemPosition - position.left ) + activeItemWidth )
   }, 400, () => {
   underline.animate({
   width: width
   }, 200, () => {
   nav.classList.remove('animate')
   })
   e.classList.add('active')
   })
   }
   }


   router.push(ref)
   setHref(ref)

   }
   */



  return (
    <NavigationWrapper
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      mobile={false}
      ref={ref}
    >

      <NavigationBar
        data-scroll
        data-scroll-sticky
        data-scroll-target="nav" id="nav"
      >
        <NavigationList>
          <Link href="https://micmetz.github.io">
            <NavLogoItem>
              {/* <NavigationListItem io')} id = "/" className = " "> */}

              <a href="https://micmetz.github.io">
                <TiChartPie size="1.5em"/>
                <span>
                {'Michael Metzjer'}
              </span>
                {/* </NavigationListItem> */}
              </a>
            </NavLogoItem>
          </Link>
          <MenuItem i={0} text="Home" link="/"/>
          <MenuItem i={1} text="Reading Room" link="/reading_room"/>
          <MenuItem i={2} text="Articles Room" link="/articles_room"/>
          <MenuItem i={3} text="The Wall" link="/the_wall"/>
        </NavigationList>
      </NavigationBar>
      <MobileNavigationbar variants={variants} isOpen={isOpen} isMobile={false}/>
    </NavigationWrapper>

  )

}





