import { motion } from 'framer-motion'
import React from 'react'
import ArticlesRoom from "../../pages/article_wall.js";
import { MenuItem } from './MenuItem.js'
import { MenuToggle } from './MenuToggle.js'




const openTransition = {
  duration: 1.1,
  delay   : 1.2,
  ease    : [0.6, 0.01, -0.05, 0.9],
}

const openTopTransition = {
  duration: 1.1,
  delay   : 1.3,
  ease    : [0.6, 0.01, -0.05, 0.9],
}

const openBottomTransition = {
  duration: 1.1,
  delay   : 1.7,
  ease    : [0.6, 0.01, -0.05, 0.9],
}

const closedTansition = {
  duration: 1,
  ease    : [0.6, 0.01, -0.05, 0.9],
}


export const MobileNavigationbar = ({ variants, isOpen, isMobile }) => {


  return (
    <>
    {isMobile ?
      <motion.nav
        animate = {isOpen ? 'open' : 'closed'}
        variants = {variants}
      >
        <MenuToggle toggle = {() => isOpen = !isOpen}/>
        <ul className = "mobile-navigation__list">
          <MenuItem i = {0} text = "Home" link = {'/'}/>
          <MenuItem i = {1} text = "Books" link = {'/reading_room'}/>
          <MenuItem i = {2} text = "Articles" link = {'/articles_room'}/>
          <MenuItem i = {3} text = "The Wall" link = {'/the_wall'}/>
        </ul >
      </motion.nav >
      : null}
    </>

  )
}




