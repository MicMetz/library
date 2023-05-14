import Head from 'next/head'
import { Layout } from './components/Layout'
import Homepage from './Homepage/Homepage.js'
import ReadingRoom from './ReadingRoom/ReadingRoom.js'




const Index = ({ page, navigation, settings }) => {
  return (
    <Layout >
      {/* <ReadingRoom /> */}
      <Homepage />
    </Layout >
  )
}

export default Index


