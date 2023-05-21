import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SidebarHeader, SidebarMenuButtonOverlay, ToC, ToCItem, SideMenuClosed, SideMenuOpened, SideMenuHeader, ToCHeader } from '../styles/SidebarStyledComponents.js'




export const Sidebar = ({ header, chapters }) => {
  const [menu, setMenu]                   = useState(false)
  const [activeChapter, setActiveChapter] = useState()
  const [scroll, setScrolling]            = useState(false)
  const [scrollTop, setScrollTop]         = useState(0)

  const onScroll = (eve) => {
    setScrollTop(eve.target.documentElement.scrollTop)
    setScrolling(eve.target.documentElement.scrollTop > scrollTop)
  }


  return (

    <SidebarMenuButtonOverlay onClick = {() => setMenu(!menu)}>
      {menu ?
        <SideMenuOpened >
          <SideMenuHeader >
            <h1 >{header?.title}</h1 >
            <h2 >{header?.subtitle}</h2 >
          </SideMenuHeader >
          <ToC >
            <ToCHeader >
              {header !== 'Article Map' && chapters !== null ?
                <h3 >Chapter List</h3 >
                :
                <h3 ></h3 >
              }
            </ToCHeader >
            <ul >
              {chapters?.map(({ chapterTitle }, id) => (
                <ToCItem key = {id} active = {activeChapter === id}>
                  <a href = {`#${id}`}>
                    <span ></span >
                    {chapterTitle}
                  </a >
                </ToCItem >
              ))}
            </ul >
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
