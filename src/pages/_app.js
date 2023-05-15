import Link from 'next/link'
import '../styles/globals.css'
import { useRouter } from 'next/router'

import { Navigation } from '../components/Navigation.js'
import Theme from '../themes/theme.js'



export default function App ({ Component, pageProps }) {
  const router = useRouter()


  return (
    <>
			<Theme >
        <Navigation />
        <Component Component key = {router.asPath} {...pageProps} />
        {/* {renderLayout({ Component, router }, pageProps)} */}
			</Theme >
		</>
  )
}
