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
      const chapterHeadings = chapters.map(({ id }) => ( {
        id,
        offset: document.getElementById(id).offsetTop
      } ))
      const scrollPosition  = window.scrollY + 100
      const active          = chapterHeadings.find(({ offset }, index) => {
        const nextChapter = chapterHeadings[ index + 1 ]
        return scrollPosition < offset || !nextChapter
      })
      if (activeChapter !== active.id) {
        setActiveChapter(active.id)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeChapter, setActiveChapter, chapters])

  return (
    <>
      <SidebarMenuButtonOverlay onClick = {() => setMenu(!menu)}>
      {menu ?
        <SideMenuOpened >
          <SideMenuHeader >
            <h1 className = "text-6xl font-bold">{title}</h1 >
          </SideMenuHeader >
          <ToC >
            {chapters.map(({ id, chapterTitle }) => (
              <ToCItem key = {id} active = {activeChapter === id}>
                <a href = {`#${id}`}>
                  <span ></span >
                  {chapterTitle}
                </a >
              </ToCItem >
            ))}
          </ToC >
        </SideMenuOpened >
        :
        <SideMenuClosed >
          <SidebarHeader >
            <h1 className = "text-6xl font-bold">{title}</h1 >
          </SidebarHeader >
        </SideMenuClosed >
      }
      </SidebarMenuButtonOverlay >
      </>
  )
}
