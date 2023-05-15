import React from 'react'
import { Navigation } from '../Navigation.js'
import { SideBar } from '../SideBar.js'





export default function DefaultLayout ({ children }) {
  return (
    <div >
      <main >{children}</main >
    </div >
  )
}
