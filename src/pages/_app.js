import Link from 'next/link'
import '../styles/globals.css'
import { useRouter } from 'next/router'

import { Navigation } from '../components/Navigation.js'
import Theme from '../themes/theme.js'


//
//
// async function getInitialProps ({ Component, router, ctx }) {
//   let pageProps = {}
//
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }
//
//   const [allData, articleData] = await Promise.all([
//     ArticleEngine(),
//     GetArticleData(router)
//   ]).catch(error =>
//     console.error('Error in _app.js getInitialProps()', error)
//   )
//
//   const propsObj = Object.assign(
//     {},
//     { articleData, allData, ...pageProps }
//   )
//
//   return { ...propsObj }
// }



export default function App ({ Component, pageProps }) {
  const router = useRouter()


  return (
    <>
			<Theme >
        <Navigation />
				<Component Component key = {router.asPath} {...pageProps} />
			</Theme >
		</>
  )
}
