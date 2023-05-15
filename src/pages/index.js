import Head from 'next/head'
import { Layout } from './components/Layout.js'
import Homepage from './Homepage/Homepage.js'
import ReadingRoom from './ReadingRoom/ReadingRoom.js'




const Index = ({ page, navigation, settings }) => {
  return (
    <div >
      <Homepage />
    </div >
  )
}

export default Index


