import { AnimatePresence } from "framer-motion";
import React from 'react'
import Footer from "../components/Layouts/Footer.js";
import Navigation from "../components/Navigation/Navigation.js";
import Theme from '../themes/theme.js'


//
// export default function App( { Component, pageProps } ) {
// 		const router = useRouter()
//
// 		return (
// 				<>
// 						<Theme >
// 										<AnimatePresence mode = "wait" initial = {true} >
// 												<Component Component key = {router.route} {...pageProps} />
// 												{/* <Component Component key = {router.asPath} {...pageProps} /> */}
// 												{/* {renderLayout({ Component, router }, pageProps)} */}
// 										</AnimatePresence >
// 						</Theme >
// 				</>
// 		)
// }
//
//



export default function App( { Component, pageProps, router } ) {


		return (
				<>
						<Theme >
								<AnimatePresence mode = "wait" initial = {true} >
										<container >
												<Navigation />
												<Component Component key = {router.route} {...pageProps} />
												<Footer />
										</container >
								</AnimatePresence >
						</Theme >
				</>
		);
}


