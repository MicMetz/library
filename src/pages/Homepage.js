import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'
import { ArticleByline, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'
import { HomeArticleFeaturedAtrribution, HomeArticleFeaturedCoverImage, HomeArticleFeaturedDetails, HomeBody, HomeArticleFeaturedFooter, HomeMain } from '../styles/HomepageStyledComponents.js'
import KillAnythingThatMovesCover from '/public/images/KillAnythingThatMoves.jpg'
import { CurrentReadings } from '/public/datasets/CurrentReadings.js'
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'




export default function Homepage () {
  const [readings, setReadings]             = useState()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeFeature, setActiveFeature]   = useState(0)

  useEffect(() => {
    setReadings(CurrentReadings)
  }, [])

  const loadCurrentReading = () => {
    let cur = {}
    for (let i = 0; i < CurrentReadings.length; i++) {
      cur.push(CurrentReadings[ i ])

    }
    setReadings(cur)
  }


  function loadCurrentReadingDescription (book, index) {
    return (
      <HomeArticleFeaturedDetails key = {index}>
        {book.description.map((paragraph, i) => {
            return (
              <p key = {i}>
                {paragraph.split('\n').map((item, key) => {
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
    )
  }


  return (
    <DefaultLayout >
      <Head >
        <title >Home</title >
      </Head >

      <HomeBody >
        <SideBar
          header = {CurrentReadings[ 0 ].header}
          chapters = {CurrentReadings[ 0 ].chapters}
        />
        <HomeMain >

          <SectionTitle main>Current Reading</SectionTitle >
          {readings?.map((book, index) => {

            return (
              <ContentBlock >
              {/* <ContentBlock key = {index}> */}

                {loadCurrentReadingDescription(book, index)}
                <HomeArticleFeaturedAtrribution >
                  <ArticleTitle >{book.header.title}</ArticleTitle >
                  <ArticleSubtitle >{book.header.subtitle}</ArticleSubtitle >
                  <ArticleByline >{book.author}</ArticleByline >
                </HomeArticleFeaturedAtrribution >
                <HomeArticleFeaturedCoverImage src = {book.cover} alt = {book.header.title} width = {300} height = {350}/>
                <HomeArticleFeaturedFooter >
                  <Link href = {book.link}>
                    <a >Read More</a >
                  </Link >
                </HomeArticleFeaturedFooter >
              </ContentBlock >
            )
          })}
        </HomeMain >
      </HomeBody >
    </DefaultLayout >

  )
}

