import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DefaultLayout from "../components/layouts/DefaultLayout.js";
import { Navigation } from '../components/nav/Navigation.js'
import Theme from '../themes/theme.js'



export default function App( { Component, pageProps } ) {
		const router = useRouter()

		return (
				<>
						<Theme >
								<DefaultLayout >
										<AnimatePresence mode = "wait" initial = {true} >
												<Component Component key = {router.route} {...pageProps} />
												{/* <Component Component key = {router.asPath} {...pageProps} /> */}
												{/* {renderLayout({ Component, router }, pageProps)} */}
										</AnimatePresence >
								</DefaultLayout >
						</Theme >
				</>
		)
}



