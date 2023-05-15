import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { NavigationBar, NavigationList, NavigationListItem } from '../styles/NavigationStyledComponents.js'




export const Navigation = () => {
  const [active, setActive] = useState('Home')

  // useEffect(() => {
  //   let currentURL = window.location.href
  //   console.log(currentURL)
  //   if (currentURL.endsWith('/')) {
  //     setActive('Home')
  //     return
  //   }
  //   if (currentURL.endsWith('/ReadingRoom')) {
  //     setActive('ReadingRoom')
  //     return
  //   }
  //   if (currentURL.endsWith('/About')) {
  //     setActive('About')
  //     return
  //   }
  //   if (currentURL.endsWith('/Contact')) {
  //     setActive('Contact')
  //     return
  //   }
  // }, [active])

  return (
    <>
    <NavigationBar >
      <NavigationList >
        <NavigationListItem active = {active === 'Home'}>
          <Link href = "/">
            <span >Home</span >
          </Link >
        </NavigationListItem >
        <NavigationListItem active = {active === 'ReadingRoom'}>
          <Link href = "/ReadingRoom">
            <span >Reading Room</span >
          </Link >
        </NavigationListItem >
        <NavigationListItem active = {active === 'Articlespage'}>
          <Link href = "/ArticleMap">
            <span >Articles</span >
          </Link >
        </NavigationListItem >
        <NavigationListItem active = {active === 'Wall'}>
          <Link href = "/TheWall.js">
            <span >The Wall</span >
          </Link >
        </NavigationListItem >
      </NavigationList >
    </NavigationBar >
    </>
  )
}


