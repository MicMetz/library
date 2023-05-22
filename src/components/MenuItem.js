import { useEffect, useState } from 'react'
import * as React from 'react'
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { NavigationListItem } from '../styles/NavigationStyledComponents.js'




const variants = {
  active  : {
    textDecoration         : `underline`,
    textDecorationColor    : `var(--color-primary)`,
    textDecorationThickness: `0.2rem`,
    textDecorationStyle    : `solid`,
    textDecorationSkipInk  : `none`,
    textDecorationLine     : `underline`,
    transformOrigin        : `left`,
    opacity                : `1 !important`,
    transition             : `all 0.2s ease-in-out`,
  },
  inactive: {
    textDecoration: `none`
  }
}


export const MenuItem = ({ i, link, text }) => {
  const [active, setActive]               = useState(false)
  const [hover, setHover]                 = useState(false)
  const [currentActive, setCurrentActive] = useState(false)


  useEffect(() => {
    if (window.location.pathname === link) {
      setActive(true)
    } else {
      setCurrentActive(document.getElementsByClassName(`active`)[ 0 ])
    }
  }, [])


  useEffect(() => {
    if (currentActive) {
      currentActive.classList.remove(`active`)
    }
    if (active) {
      document.getElementById(link).classList.add(`active`)
    }
  }, [active])



  return (
    <motion.li
      variants = {variants}
      initial = {{
        textDecoration : `none`,
        opacity        : 0.5,
        transformOrigin: `left`,
      }}
      whileHover = {{
        transition           : `all 0.5s ease-out`,
        textDecoration       : `underline`,
        textDecorationColor  : `var(--color-secondary)`,
        textDecorationStyle  : `solid`,
        textDecorationSkipInk: `none`,
        textDecorationLine   : `underline`,
        opacity              : 1,
      }}
      // onClick={() => }
      whileTap = {{ scale: 0.95 }}
      // whileActive = {{ textDecoration: `underline`, textDecorationColor: `#FF008C` }}
    >
      <NavigationListItem href = {link} style = {active ? variants.active : variants.inactive} id = {link}>{text}</NavigationListItem >
    </motion.li >
  )
}
