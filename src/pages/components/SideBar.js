import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SidebarHeader, SidebarMenuButtonOverlay, ToC, ToCItem, SideMenuClosed, SideMenuOpened, SideMenuHeader, ToCHeader } from '../../styles/StyledComponents.js'




function NavLink (props) {
  return null
}


export const SideBar = ({ header, chapters }) => {
  const [menu, setMenu]                   = useState(false)
  const [activeChapter, setActiveChapter] = useState()
  const [scroll, setScrolling]            = useState(false)
  const [scrollTop, setScrollTop]         = useState(0)

  const onScroll = (eve) => {
    setScrollTop(eve.target.documentElement.scrollTop)
    setScrolling(eve.target.documentElement.scrollTop > scrollTop)
  }

  useEffect(() => {
    const onScroll = (eve) => {
      setScrollTop(eve.target.documentElement.scrollTop)
      setScrolling(eve.target.documentElement.scrollTop > scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <SidebarMenuButtonOverlay onClick = {() => setMenu(!menu)}>
      {menu ?
        <SideMenuOpened >
          <SideMenuHeader >
            <h1 >{header?.title}</h1 >
            {/* <h2 >{header?.subtitle}</h2 > */}
          </SideMenuHeader >
          <ToC >
            <ToCHeader >
              {header !== 'Article Map' && chapters !== null ?
                'Chapter List'
                :
                ' '
              }
            </ToCHeader >
            {chapters?.map(({ id, chapterTitle }) => (
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
            <h1 >{header?.title}</h1 >
            {/* <h2 >{header?.subtitle}</h2 > */}
          </SidebarHeader >
        </SideMenuClosed >
      }
    </SidebarMenuButtonOverlay >
  )
}
