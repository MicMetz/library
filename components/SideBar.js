import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SideMenu, SidebarHeader, SidebarMenuButton, ToC, ToCItem } from '../styles/StyledComponents.js'




export const SideBar = ({ title, chapters }) => {
  const [activeMenu, setActiveMenu]       = useState(false)
  const [activeChapter, setActiveChapter] = useState()

  const MenuButton = ({ active, onClick }) => (
    <SidebarMenuButton onClick = {onClick} active = {active}>
      <span />
      <span />
      <span />
    </SidebarMenuButton >
  )

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
      <SideMenu >
        <ToC className = {activeMenu ? 'menu-items menu-items-open' : 'menu-items'}>
          {chapters?.map(({ id, title, slug }) => (
            <ToCItem key = {id} active = {activeChapter === id}>
              <Link href = {slug}>
                <a >{title}</a >
              </Link >
            </ToCItem >
          ))}
        </ToC >
      </SideMenu >
    )
  }

  return (
    <header className = "flex flex-col items-center justify-center py-2">
      <div >
        <Link href = "/">
          <h1 className = "text-6xl font-bold">{title}</h1 >
          <h2 className = "text-2xl font-bold">{chapters}</h2 >
        </Link >
        <Menu chapters = {chapters}/>
      </div >

    </header >
  )
}
