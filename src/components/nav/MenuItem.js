import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import * as React from 'react'
import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion'
import {LinkListItem} from '../../styles/NavigationStyledComponents.js'
import Link from 'next/link';




const variants = {
  active: {
    textDecoration: `underline`,
    textDecorationColor: `var(--color-primary)`,
    textDecorationThickness: `0.2rem`,
    textDecorationStyle: `solid`,
    textDecorationSkipInk: `none`,
    textDecorationLine: `underline`,
    transformOrigin: `left`,
    opacity: `1 !important`,
    transition: `all 0.2s ease-in-out`,
  },
  inactive: {
    textDecoration: `none`
  }
}


export const MenuItem = ({i, link, text}) => {
  const router                            = useRouter()
  const [active, setActive]               = useState(false)
  const [hover, setHover]                 = useState(false)
  const [currentActive, setCurrentActive] = useState(false)


  useEffect(() => {
    if (window.location.pathname === link) {
      setActive(true)
    } else {
      setCurrentActive(document.getElementsByClassName(`active`)[0])
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


  function handleRoute(ref) {
    router.push(ref)

  }



  return (
    <motion.li
      variants={variants}
      initial={{
        textDecoration: `none`,
        opacity: 0.5,
        transformOrigin: `left`,
      }}
      whileHover={{
        transition: `all 0.5s ease-out`,
        textDecoration: `underline`,
        textDecorationColor: `var(--color-secondary)`,
        textDecorationStyle: `solid`,
        textDecorationSkipInk: `none`,
        textDecorationLine: `underline`,
        opacity: 1,
      }}
      // onClick={() => }
      whileTap={{scale: 0.95}}
      // whileActive = {{ textDecoration: `underline`, textDecorationColor: `#FF008C` }}
    >
      {/* <LinkListItem id = {link} > */}
      {/*   <a href = {link}>{text}</a > */}
      {/* </LinkListItem > */}
      <Link href={link}>
        <LinkListItem style={active ? variants.active : variants.inactive} id={link}
                            onClick={() => handleRoute(link)}>{text}</LinkListItem>
      </Link>
    </motion.li>
  )
}
