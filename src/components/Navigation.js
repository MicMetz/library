import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { TiChartPie } from 'react-icons/ti'
import styled from 'styled-components'
import { NavigationBar, NavigationList, NavigationListItem, NavLogoItem, Underline } from '../styles/NavigationStyledComponents.js'




export const Navigation = () => {
  const router                  = useRouter()
  const [href, setHref]         = useState()
  const [showMenu, setShowMenu] = useState(false)


  useEffect(() => {
    setHref(router.pathname)
  }, [router.pathname])

  const toggleDropDownMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleRoute = (ref) => {
    setHref(ref)
    router.push(`/${ref}`)

    var nav = styled(Underline)

  }



  return (
    <NavigationBar >
      <Underline />
      <NavigationList >
        <NavLogoItem >
          <a href = "https://micmetz.github.io">
            <TiChartPie size = "1.5em"/>
            <span >
              {'Michael Metzjer'}
            </span >
          </a >
        </NavLogoItem >
        <NavigationListItem onClick = {() => handleRoute('/')}>
          <span >Home</span >
        </NavigationListItem >
        <NavigationListItem onClick = {() => handleRoute('ReadingRoom')}>
          <span >Reading Room</span >
        </NavigationListItem >
        <NavigationListItem onClick = {() => handleRoute('Articles')}>
          <span >Articles</span >
        </NavigationListItem >
        <NavigationListItem onClick = {() => handleRoute('TheWall')}>
          <span >The Wall</span >
        </NavigationListItem >
      </NavigationList >
    </NavigationBar >

  )
}


