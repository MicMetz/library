import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { TiChartPie } from 'react-icons/ti'
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
      <NavigationListItem >
        <a href = "https://micmetz.github.io">
          <span
            style = {{
              display   : 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)', fontSize: '1.0rem',
              lineHeight: '32px', transition: '0.4s ease', paddingRight: '5rem',
              float     : 'left', position: 'absolute', left: '0', top: '0', height: '100%', width: '100%'
            }}
          >
            <TiChartPie size = "1.5rem"/> Michael Metzjer
          </span >
        </a >
      </NavigationListItem >
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


