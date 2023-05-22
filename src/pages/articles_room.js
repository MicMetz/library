import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation } from '../components/Navigation.js'
import { ArticleMapBody, ArticleMapMain } from '../styles/ArticleMapStyledComponents.js'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Sidebar } from '../components/Sidebar.js'
import { Current } from './api/Current.js'




export default function Articles_room (isToggleOpen, toggleOpen, isIntro) {
  const [scrollPosition, setScrollPosition] = useState()
  const navRef                              = useRef({ isToggleOpen, toggleOpen })
  const introRef                            = useRef(isIntro)

  return (
    <DefaultLayout >
      <Navigation isOpen = {isToggleOpen} toggleOpen = {toggleOpen} isIntro = {isIntro} forwardRef = {navRef}/>

      <Head >
        <title >Article Map</title >
        <meta name = "" content = "initial-scale=1.0, width=device-width"/>
        <link rel = "icon" href = "/icons/logo.svg"/>
      </Head >

      <ArticleMapBody >
        <Sidebar header = {'Article Map'} chapters = {[]}/>

      </ArticleMapBody >

      <ArticleMapMain >

      </ArticleMapMain >
    </DefaultLayout >
  )
}
