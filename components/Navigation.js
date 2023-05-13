import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { NavigationBar, NavigationList, NavigationListItem } from '../styles/NavigationStyledComponents.js'




export const Navigation = () => {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    let currentURL = window.location.href
    console.log(currentURL)
    if (currentURL.endsWith('/')) {
      setActive('Home')
      return
    }
    if (currentURL.endsWith('/ReadingRoom')) {
      setActive('ReadingRoom')
      return
    }
    if (currentURL.endsWith('/About')) {
      setActive('About')
      return
    }
    if (currentURL.endsWith('/Contact')) {
      setActive('Contact')
      return
    }
  }, [active])

  return (
    <>
      <NavigationBar >
        <NavigationList >
          <NavigationListItem active = {active === 'Home'}>
            <Link href = "/">
              <a >Home</a >
            </Link >
          </NavigationListItem >
          <NavigationListItem active = {active === 'ReadingRoom'}>
            <Link href = "/ReadingRoom">
              <a >Reading Room</a >
            </Link >
          </NavigationListItem >
          <NavigationListItem active = {active === 'About'}>
            <Link href = "/About">
              <a >About</a >
            </Link >
          </NavigationListItem >
          <NavigationListItem active = {active === 'Contact'}>
            <Link href = "/Contact">
              <a >Contact</a >
            </Link >
          </NavigationListItem >
        </NavigationList >
      </NavigationBar >
    </>
  )
}


