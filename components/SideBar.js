import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SidebarHeader, SidebarMenuButtonOverlay, ToC, ToCItem, SideMenuClosed, SideMenuOpened, SideMenuHeader } from '../styles/StyledComponents.js'




function NavLink (props) {
  return null
}


export const SideBar = ({ title, chapters }) => {
  const [menu, setMenu]                   = useState(false)
  const [activeChapter, setActiveChapter] = useState()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const activeChapter  = chapters?.find(({ slug }) => {
        const element = document.querySelector(slug)
        if (element) {
          const { offsetTop, offsetHeight } = element
          return scrollPosition >= offsetTop - offsetHeight / 2 && scrollPosition < offsetTop + offsetHeight / 2
        }
      })
      if (activeChapter) {
        setActiveChapter(activeChapter.id)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [chapters])

  return (
    <>
      <SidebarMenuButtonOverlay onClick = {() => setMenu(!menu)}>
      {menu ?
        <SideMenuOpened >
          <SideMenuHeader >
            <h1 className = "text-6xl font-bold">{title}</h1 >
            <h2 className = "text-2xl font-bold">{chapters}</h2 >
          </SideMenuHeader >
          <ToC >
            {chapters.map(({ id, title, slug }) => (
              <ToCItem key = {id} active = {activeChapter === id}>
                <Link href = {slug}>
                  <a >{title}</a >
                </Link >
              </ToCItem >
            ))}
          </ToC >
        </SideMenuOpened >
        :
        <SideMenuClosed >
          <SidebarHeader >
            <h1 className = "text-6xl font-bold">{title}</h1 >
            <h2 className = "text-2xl font-bold">{chapters}</h2 >
          </SidebarHeader >
        </SideMenuClosed >
        // </SideMenu >
      }
      </SidebarMenuButtonOverlay >
      </>
  )
}
