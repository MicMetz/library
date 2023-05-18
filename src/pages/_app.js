import Link from 'next/link'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { Navigation } from '../components/Navigation.js'
import Theme from '../themes/theme.js'
import { FirebaseStorage } from '../tools/database/config.js'




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



export const getStaticProps = async () => {
  let books = []
  try {
    // await the promise
    const querySnapshot = await FirebaseStorage
    .collection('books')


    querySnapshot.forEach(function (doc) {
      console.log(doc.data().title)
      console.log(doc.data().id)
      books.push({
        id   : doc.data().id,
        title: doc.data().title,
      })
    })
    console.log(books)
  } catch (error) {
    // catch part using try/catch
    console.log('Error getting documents: ', error)
    // return something else here, or an empty props, or throw an exception or whatever
  }

  return {
    props: {
      books
    }
  }
}
