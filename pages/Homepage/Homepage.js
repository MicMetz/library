import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout.js'
import { SideBar } from '../../components/SideBar.js'
import { HomeArticleFeatured, HomeArticleFeaturedCover, HomeArticleFeaturedCoverImage, HomeBody, HomeFooter, HomeMain } from './HomepageStyles.js'

import Image from 'next/image'




export default function Homepage () {

  return (
    <HomeBody >
      <SideBar
        title = "The Shape of Design"
        chapters = {[
          { id: 1, chapterTitle: 'Introduction' },
          { id: 2, chapterTitle: 'The Shape of the Network' },
          { id: 3, chapterTitle: 'The Shape of the Words' },
          { id: 4, chapterTitle: 'The Shape of the Page' },
          { id: 5, chapterTitle: 'The Shape of the Screen' },
          { id: 6, chapterTitle: 'The Shape of the Experience' },
          { id: 7, chapterTitle: 'The Shape of the Story' },
          { id: 8, chapterTitle: 'The Shape of Change' },
          { id: 9, chapterTitle: 'The Shape of Time' },
          { id: 10, chapterTitle: 'The Shape of the Work' },
          { id: 11, chapterTitle: 'The Shape of the Future' }
        ]}
      />
      <HomeMain >
        <HomeArticleFeaturedCover >
          <HomeArticleFeaturedCoverImage src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/884633/cover.svg" alt = "The Shape of Design cover" width = {500} height = {500}/>
        </HomeArticleFeaturedCover >
      </HomeMain >

      <HomeFooter > </HomeFooter >
    </HomeBody >
  )
}
