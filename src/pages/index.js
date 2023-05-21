import React from 'react'
import Head from 'next/head'
import Homepage from './Homepage.js'
import ReadingRoom from './ReadingRoom.js'




export default function Index ({ page, navigation, settings }) {
  return (
    <>
      <Homepage />
    </ >
  )
}


//
// export const getStaticProps = () => {
//
//   const data    = getLatestPosts();
//   const allPost = getAllPosts();
//   const feed    = generateRSSFeed(allPost)
//   fs.writeFileSync('public/rss.xml', feed.rss2());
//
//   return {
//     props: {
//       posts: data
//     }
//   }
// }
