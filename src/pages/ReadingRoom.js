import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'
import Image from 'next/image'
import { Readings } from '/public/datasets/Readings.js'
import { ArticleByline, ArticleFeaturedAtrribution, ArticleFeaturedCoverImage, ArticleFeaturedFooter, ArticlePage, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'
import { ReadingRoomBody, ReadingRoomBookContainer, ReadingRoomMain } from '../styles/ReadingRoomStyledComponents.js'
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'
import { ArticleFeaturedDescription } from '../tools/DescriptionParser.js'




export default function ReadingRoom () {
  const [readings, setReadings]             = useState()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeFeature, setActiveFeature]   = useState(0)

  useEffect(() => {
    setReadings(Readings)
  }, [])

  const loadCurrentReading = () => {
    let cur = {}
    for (let i = 0; i < Readings.length; i++) {
      cur.push(Readings[ i ])

    }
    setReadings(cur)
  }


  return (
    <DefaultLayout >
      <Head >
        <title >Home</title >
      </Head >

      <ReadingRoomBody >
        <SideBar header = {Readings[ 0 ].header} chapters = {Readings[ 0 ].chapters}/>
        <ReadingRoomMain >

          <SectionTitle main>Current Reading</SectionTitle >
          {readings?.map(book => {

            return (
              <ReadingRoomBookContainer key = {book.id}>
                {/* <ContentBlock key = {index}> */}

                {ArticleFeaturedDescription(book)}
                <ArticleFeaturedAtrribution >
                  <ArticleTitle >{book.header.title}</ArticleTitle >
                  <ArticleSubtitle >{book.header.subtitle}</ArticleSubtitle >
                  <ArticleByline >{book.author}</ArticleByline >
                </ArticleFeaturedAtrribution >
                <ArticleFeaturedCoverImage src = {book.cover} alt = {book.header.title}/>
                <ArticleFeaturedFooter >
                  <Link href = {book.link}>
                    <a >Read More</a >
                  </Link >
                </ArticleFeaturedFooter >
              </ReadingRoomBookContainer >
            )
          })}
        </ReadingRoomMain >
      </ReadingRoomBody >
    </DefaultLayout >

  )
}

