import React from 'react'
import { Navigation } from '../Navigation.js'
import { Sidebar } from '../Sidebar.js'




export default function DefaultLayout ({ children }) {
  return (
    <div className = "flex flex-col justify-between h-screen">
      <Navigation />
      {/* <SideBar /> */}
      {children}

    </div >
  )
}
