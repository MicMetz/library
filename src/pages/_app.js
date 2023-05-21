import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navigation } from '../components/Navigation.js'
import Theme from '../themes/theme.js'
import { FirebaseStorage } from '../tools/database/config.js'




export default function App ({ Component, pageProps }) {
  const router = useRouter()



  return (
    <>
			<Theme >
        <Component Component key = {router.asPath} {...pageProps} />
        {/* {renderLayout({ Component, router }, pageProps)} */}
			</Theme >
		</>
  )
}



/*
 export const getStaticProps = async () => {
 let articles = []
 try {
 // await the promise
 const querySnapshot = await FirebaseStorage
 .bucket('gs://leftward-spin.appspot.com')


 querySnapshot.forEach(function (doc) {
 console.log(doc.data().title)
 console.log(doc.data().id)
 articles.push({
 id   : doc.data().id,
 title: doc.data().title,
 })
 })
 console.log(articles)
 } catch (error) {
 // catch part using try/catch
 console.log('Error getting documents: ', error)
 // return something else here, or an empty props, or throw an exception or whatever
 }

 return {
 props: {
 articles
 }
 }
 }
 */
