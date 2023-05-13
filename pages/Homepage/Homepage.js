import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout.js'
import { SideBar } from '../../components/SideBar.js'
import { ArticleByline, ArticleSubtitle, ArticleTitle } from '../../styles/ArticleComponents.js'
import { PageHeader, PageHeaderTitle } from '../../styles/StyledComponents.js'
import { HomeArticleFeatured, HomeArticleFeaturedCover, HomeArticleFeaturedCoverImage, HomeBody, HomeFooter, HomeMain } from './HomepageStyles.js'

import Image from 'next/image'
import KillAnythingThatMovesCover from '../../public/images/KillAnythingThatMoves.jpg'




export default function Homepage () {

  return (
    <HomeBody >
      <SideBar
        title = "Kill Anything That Moves"
        chapters = {[
          { id: 1, chapterTitle: 'The Massacre at Trieu Ai' },
          { id: 2, chapterTitle: 'A System of Suffering' },
          { id: 3, chapterTitle: 'Overkill' },
          { id: 4, chapterTitle: 'A litany of atrocities' },
          { id: 5, chapterTitle: 'Unbounded misery' },
          { id: 6, chapterTitle: 'The bummer, the "Gook-Hunting" General, and the Butcher of the Delta' },
          { id: 6, chapterTitle: 'Where Have All the War Crimes Gone?' }
        ]}
      />
      <HomeMain >
        {/* <PageHeader > */}
        {/*   <PageHeaderTitle >Currently Reading</PageHeaderTitle > */}
        {/* </PageHeader > */}

        <HomeArticleFeatured >

          <ArticleTitle >Kill Anything That Moves</ArticleTitle >
          <ArticleSubtitle >The Real American War in Vietnam</ArticleSubtitle >
          <ArticleByline >Nick Turse</ArticleByline >

        </HomeArticleFeatured >

        <HomeArticleFeaturedCover >
          <HomeArticleFeaturedCoverImage src = {KillAnythingThatMovesCover} alt = "Kill Anything That Moves" width = {500} height = {500}/>
        </HomeArticleFeaturedCover >
      </HomeMain >

      <HomeFooter > </HomeFooter >
    </HomeBody >
  )
}
