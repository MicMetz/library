import React, { useState } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import { Navigation } from '../nav/Navigation.js'
import { Sidebar } from '../Sidebar.js'



export default function DefaultLayout( { children } ) {

		return (
				<div className = "flex flex-col justify-between h-screen" >
						{children}
				</div >
		)
}
