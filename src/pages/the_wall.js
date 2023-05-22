import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Navigation } from '../components/Navigation.js'




export default function TheWall (isToggleOpen, toggleOpen, isIntro) {
  const [scrollPosition, setScrollPosition] = useState()
  const navRef                              = useRef({ isToggleOpen, toggleOpen })
  const introRef                            = useRef(isIntro)


  return (
    <DefaultLayout >
      <Navigation isOpen = {isToggleOpen} toggleOpen = {toggleOpen} isIntro = {isIntro} forwardRef = {navRef}/>

      <Head>
        <title>Wall of Misery</title>
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <h1 >Wall of Misery</h1 >
    </DefaultLayout >
  )
}
