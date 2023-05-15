import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../components/Layout.js'
import { SideBar } from '../components/SideBar.js'
import { ArticleByline, ArticleSubtitle, ArticleTitle } from '../../styles/ArticleStyledComponents.js'
import { HomeArticleFeaturedAtrribution, HomeArticleFeaturedCoverImage, HomeArticleFeaturedDetails, HomeBody, HomeFooter, HomeMain } from '../../styles/HomepageStyledComponents.js'

import Image from 'next/image'
import KillAnythingThatMovesCover from '/public/images/readings/KillAnythingThatMoves.jpg'
import { CurrentReadings } from '/public/datasets/CurrentReadings.js'




export default function Homepage () {

  return (
    <Layout >
      <Head >
        <title >Home</title >
        <meta name = "description" content = "initial-scale=1.0, width=device-width"/>
      </Head >

      <HomeBody >
        <SideBar
          header = {CurrentReadings[ 0 ].header}
          chapters = {CurrentReadings[ 0 ].chapters}
        />
        <HomeMain >


          <HomeArticleFeaturedDetails >
            {CurrentReadings[ 0 ].description.map((paragraph, index) => {
                return (
                  <p key = {index}>{paragraph.split('\n').map((item, key) => {
                    return (
                      <span key = {key}>
                        {item}
                        <br />
                      </span >
                    )
                  })}</p >
                )
              }
            )}
          </HomeArticleFeaturedDetails >


          <HomeArticleFeaturedAtrribution >

            <ArticleTitle >{CurrentReadings[ 0 ].header.title}</ArticleTitle >
            <ArticleSubtitle >{CurrentReadings[ 0 ].header?.subtitle}</ArticleSubtitle >
            <ArticleByline >{CurrentReadings[ 0 ].author}</ArticleByline >

          </HomeArticleFeaturedAtrribution >

          <HomeArticleFeaturedCoverImage src = {CurrentReadings[ 0 ].cover} alt = {CurrentReadings[ 0 ].title} width = {300} height = {350}/>

        </HomeMain >

        <HomeFooter >

        </HomeFooter >
      </HomeBody >
    </Layout >
  )
}

