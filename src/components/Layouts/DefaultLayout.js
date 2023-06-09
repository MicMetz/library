import Head from "next/head";
import React, { useState } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import { Sidebar } from '../Sidebar.js'



export default function DefaultLayout( { children } ) {

		return (
				<>
						<Head >
								<meta content = "width=device-width, initial-scale=1.0" name = "viewport" />
						</Head >

						<div className = "flex flex-col justify-between h-screen" >
								{children}
						</div >
				</>
		)
}
