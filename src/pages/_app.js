import Link from 'next/link'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import Theme from '../themes/theme.js'




export default function App ({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
			<Theme >
				<Component Component key = {router.asPath} {...pageProps} />
			</Theme >
		</>
  )
}
