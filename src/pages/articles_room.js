import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation } from '../components/Navigation.js'
import { ArticleMapBody, ArticleMapMain } from '../styles/ArticleMapStyledComponents.js'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Sidebar } from '../components/Sidebar.js'
import { SectionTitle } from '../styles/StyledComponents.js'
import { Current } from './api/Current.js'




export default function Articles_room (forwardRef, open, toggle) {
  const [scrollPosition, setScrollPosition] = useState()
  const navRef                              = useRef({ open, toggle })
  const ref                                 = useRef(forwardRef)


  return (
    <DefaultLayout >
      <Navigation open = {open} toggle = {toggle} forwardRef = {ref}/>

      <Head >
        <title >Article List</title >
        <meta name = "" content = "initial-scale=1.0, width=device-width"/>
        <link rel = "icon" href = "/icons/logo.svg"/>
      </Head >

      <ArticleMapBody >
        <Sidebar header = {'Article Map'} chapters = {[]}/>
        <SectionTitle main>Article List</SectionTitle >
      </ArticleMapBody >

      <ArticleMapMain >

      </ArticleMapMain >
    </DefaultLayout >
  )
}
