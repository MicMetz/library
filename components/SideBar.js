import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SidebarHeader, SidebarMenuButton, ToC, ToCItem, ArticleSidebarHeader, SideMenuClose, SideMenuOpen } from '../styles/StyledComponents.js'




function NavLink (props) {
  return null
}


export const SideBar = ({ title, chapters }) => {
  const [activeMenu, setActiveMenu]       = useState(false)
  const [activeChapter, setActiveChapter] = useState()

  const Menu = ({ chapters }) => {
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
      <SideMenuOpen >
        <SidebarHeader >{title}</SidebarHeader >
        <ToC >
          {chapters.map(({ id, title, slug }) => (
            <ToCItem key = {id}>
              <Link href = {slug}>
                <h3 >
                  {title}
                </h3 >
              </Link >
            </ToCItem >
          ))}
        </ToC >
        <SidebarMenuButton onClick = {() => setActiveMenu(!activeMenu)}/>

      </SideMenuOpen >
    )
  }

  return (
    <SideMenuClose >
      {activeMenu ? <Menu chapters = {chapters}/> :
        <ArticleSidebarHeader >
          <h1 className = "text-6xl font-bold">{title}</h1 >
          <h2 className = "text-2xl font-bold">{chapters}</h2 >
        </ArticleSidebarHeader >
      }
      <SidebarMenuButton onClick = {() => setActiveMenu(!activeMenu)}/>

    </SideMenuClose >
  )
}
