import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Navigation } from '../components/Navigation.js'
import { SectionTitle } from '../styles/StyledComponents.js'




export default function TheWall (forwardRef, open, toggle) {
  const [scrollPosition, setScrollPosition] = useState()
  const navRef                              = useRef({ open, toggle })
  const ref                                 = useRef(forwardRef)


  return (
    <DefaultLayout >
      <Navigation open = {open} toggle = {toggle} forwardRef = {ref}/>

      <Head>
        <title>Wall of Misery</title>
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <SectionTitle main>Wall of Misery</SectionTitle>
    </DefaultLayout >
  )
}
