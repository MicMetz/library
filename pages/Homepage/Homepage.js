import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout.js'
import { SideBar } from '../../components/SideBar.js'
import { ArticleByline, ArticleSubtitle, ArticleTitle } from '../../styles/ArticleStyledComponents.js'
import { PageHeader, PageHeaderTitle } from '../../styles/StyledComponents.js'
import { HomeArticleFeatured, HomeArticleFeaturedCover, HomeArticleFeaturedCoverImage, HomeBody, HomeFooter, HomeMain } from '../../styles/HomepageStyledComponents.js'

import Image from 'next/image'
import KillAnythingThatMovesCover from '/public/images/KillAnythingThatMoves.jpg'
import { CurrentReadings } from '/public/datasets/CurrentReadings.js'




export default function Homepage () {

  return (
    <HomeBody >
      <SideBar
        title = {CurrentReadings[ 0 ].title}
        chapters = {CurrentReadings[ 0 ].chapters}

      />
      <HomeMain >

        <HomeArticleFeatured >

          <ArticleTitle >{CurrentReadings[ 0 ].title}</ArticleTitle >
          <ArticleSubtitle >{CurrentReadings[ 0 ].subtitle}</ArticleSubtitle >
          <ArticleByline >{CurrentReadings[ 0 ].author}</ArticleByline >

        </HomeArticleFeatured >

        {/* <HomeArticleFeaturedCover > */}
        <HomeArticleFeaturedCoverImage src = {CurrentReadings[ 0 ].cover} alt = {CurrentReadings[ 0 ].title} width = {300} height = {400}/>
        {/* </HomeArticleFeaturedCover > */}
      </HomeMain >

      <HomeFooter >

      </HomeFooter >
    </HomeBody >
  )
}

