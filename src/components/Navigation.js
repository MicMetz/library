import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { TiChartPie } from 'react-icons/ti'
import styled from 'styled-components'
import { NavigationBar, NavigationList, NavigationListItem, NavLogoItem } from '../styles/NavigationStyledComponents.js'




export const Navigation = () => {
  const router                  = useRouter()
  const [href, setHref]         = useState()
  const [showMenu, setShowMenu] = useState(false)

  var activeItem         = null
  var underline          = null
  var activeItemPosition = 0
  var activeItemWidth    = 0


  useEffect(() => {
    setHref(router.pathname)
    console.log(router.pathname)
    return () => { }
  }, [])


  useEffect(() => {
    var nav   = document.getElementById('nav')
    underline = document.createElement('div')
    underline.classList.add('underline')
    nav.appendChild(underline)
    activeItem = document.getElementById(`${href}`)
    // console.log(activeItem)
    if (activeItem) {
      activeItemPosition    = activeItem.getBoundingClientRect()
      activeItemWidth       = activeItemPosition.width
      underline.style.left  = `${activeItemPosition.left}px`
      underline.style.width = `${activeItemWidth}px`
    }

  }, [setHref, href])


  const toggleDropDownMenu = () => {
    setShowMenu(!showMenu)
  }



  const handleRoute = (ref) => {

    var nav = document.getElementById('nav')
    var e   = document.getElementById(`${ref}`)
    // console.log(e)

    // nav.addEventListener('click', (e) => {

    if (!nav.classList.contains('animate')) {
      // console.log('clicked')
      // if (!e.classList.contains('active') && e.tagName === 'li' && !nav.classList.contains('animate')) {
      nav.classList.add('animate')
      let position = e.getBoundingClientRect()
      let width    = e.style.width
      if (position.left >= activeItemPosition) {
        underline.animate({
          width: ( ( position.left - activeItemPosition ) + width )
        }, 400, () => {
          underline.animate({
            left : position.left,
            width: width
          }, 200, () => {
            nav.classList.remove('animate')
          })
          e.classList.add('active')
        })
      } else {
        underline.animate({
          left : position.left,
          width: ( ( activeItemPosition - position.left ) + activeItemWidth )
        }, 400, () => {
          underline.animate({
            width: width
          }, 200, () => {
            nav.classList.remove('animate')
          })
          e.classList.add('active')
        })
      }
    }


    router.push(ref)
    setHref(ref)

  }



  return (
    <NavigationBar id = "nav">

      <NavigationList >
        <NavLogoItem >
          <a href = "https://micmetz.github.io">
            <TiChartPie size = "1.5em"/>
            <span >
              {'Michael Metzjer'}
            </span >
          </a >
        </NavLogoItem >
        <NavigationListItem onClick = {() => handleRoute('/')} id = "/" className = " ">
          <span >Home</span >
        </NavigationListItem >
        <NavigationListItem onClick = {() => handleRoute('/reading_room')} id = "/reading_room" className = " ">
          <span >Reading Room</span >
        </NavigationListItem >
        <NavigationListItem onClick = {() => handleRoute('/articles_room')} id = "/articles_room" className = " ">
          <span >Articles</span >
        </NavigationListItem >
        <NavigationListItem onClick = {() => handleRoute('/the_wall')} id = "/the_wall" className = " ">
          <span >The Wall</span >
        </NavigationListItem >
      </NavigationList >
    </NavigationBar >

  )
}


