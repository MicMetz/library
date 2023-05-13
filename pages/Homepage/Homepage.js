import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout.js'
import { SideBar } from '../../components/SideBar.js'
import { ArticleByline, ArticleSubtitle, ArticleTitle } from '../../styles/ArticleComponents.js'
import { PageHeader, PageHeaderTitle } from '../../styles/StyledComponents.js'
import { HomeArticleFeatured, HomeArticleFeaturedCover, HomeArticleFeaturedCoverImage, HomeBody, HomeFooter, HomeMain } from '../../styles/HomepageStyles.js'

import Image from 'next/image'
import KillAnythingThatMovesCover from '/public/images/KillAnythingThatMoves.jpg'
import { Readings } from '/public/datasets/Reads.js'




export default function Homepage () {

  console.log(Readings)

  return (
    <HomeBody >
      <SideBar
        title = "Kill Anything That Moves"
        chapters = {Readings[ 0 ].chapters}

      />
      <HomeMain >

        <HomeArticleFeatured >

          <ArticleTitle >Kill Anything That Moves</ArticleTitle >
          <ArticleSubtitle >The Real American War in Vietnam</ArticleSubtitle >
          <ArticleByline >Nick Turse</ArticleByline >

        </HomeArticleFeatured >

        <HomeArticleFeaturedCover >
          <HomeArticleFeaturedCoverImage src = {Readings[ 0 ].cover} alt = "Kill Anything That Moves" width = {400} height = {600}/>
        </HomeArticleFeaturedCover >
      </HomeMain >

      <HomeFooter >

      </HomeFooter >
    </HomeBody >
  )
}
