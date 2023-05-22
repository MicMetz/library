import React, { useState } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import { Navigation } from '../Navigation.js'
import { Sidebar } from '../Sidebar.js'




export default function DefaultLayout ({ children }) {


  return (
    <>
      <Navigation />
      {/* <Sidebar /> */}
     {children}
    </>
  )
}
