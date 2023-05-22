import React, { useState } from 'react'
import { Navigation } from '../Navigation.js'
import { Sidebar } from '../Sidebar.js'




export default function DefaultLayout ({ children }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  // if (error) console.log(error);


  function toggleBodyScroll (isToggleOpen) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <div className = "flex flex-col justify-between h-screen">
      <Navigation isOpen = {isToggleOpen}  toggleOpen = {() => toggleBodyScroll(isToggleOpen)}                  />
      {/* <SideBar /> */}
      {children}

    </div >
  )
}
