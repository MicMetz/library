import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout.js'
import { SideBar } from '../../components/SideBar.js'
import Image from 'next/image'
import { Readings } from '/public/datasets/Readings.js'
import { ArticlePage } from '../../styles/ArticleStyledComponents.js'
import { ReadingRoomBody, ReadingRoomMain } from '../../styles/ReadingRoomStyledComponents.js'




export default function ReadingRoom () {
  const [activeReading, setActiveReading] = useState(0)

  return (
    <Layout >
    <ReadingRoomBody >
      <SideBar
        title = {activeReading.title}
        chapters = {activeReading.chapters}
      />

      <ReadingRoomMain >

        <ArticlePage data-scroll data-scroll-speed = "1" data-scroll-call = "in" data-scroll-repeat = "true" data-scroll-offset = "0, 0">
          <h1 >{activeReading.title}</h1 >
        </ArticlePage >
      </ReadingRoomMain >

      {/* <ReadingRoomFooter > */}

      {/* </ReadingRoomFooter > */}
    </ReadingRoomBody >
    </Layout >
  )
}

