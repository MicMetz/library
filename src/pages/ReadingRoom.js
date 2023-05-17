import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'
import Image from 'next/image'
import { Readings } from '/public/datasets/Readings.js'
import { ArticleByline, ArticlePage, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'
import { ReadingRoomBody, ReadingRoomBookAtrribution, ReadingRoomBookContainer, ReadingRoomBookCoverImage, ReadingRoomBookFooter, ReadingRoomMain, ReadingRoomBookDetails } from '../styles/ReadingRoomStyledComponents.js'
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'




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


  function loadCurrentReadingDescription (book, index) {
    return (
      <ReadingRoomBookDetails key = {index}>
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
      </ReadingRoomBookDetails >
    )
  }


  return (
    <DefaultLayout >
      <Head >
        <title >Home</title >
      </Head >

      <ReadingRoomBody >
        <SideBar
          header = {Readings[ 0 ].header}
          chapters = {Readings[ 0 ].chapters}
        />
        <ReadingRoomMain >

          <SectionTitle main>Current Reading</SectionTitle >
          {readings?.map((book, index) => {

            return (
              <ReadingRoomBookContainer >
                {/* <ContentBlock key = {index}> */}

                {loadCurrentReadingDescription(book, index)}
                <ReadingRoomBookAtrribution >
                  <ArticleTitle >{book.header.title}</ArticleTitle >
                  <ArticleSubtitle >{book.header.subtitle}</ArticleSubtitle >
                  <ArticleByline >{book.author}</ArticleByline >
                </ReadingRoomBookAtrribution >
                <ReadingRoomBookCoverImage src = {book.cover} alt = {book.header.title} width = {300} height = {350}/>
                <ReadingRoomBookFooter >
                  <Link href = {book.link}>
                    <a >Read More</a >
                  </Link >
                </ReadingRoomBookFooter >
              </ReadingRoomBookContainer >
            )
          })}
        </ReadingRoomMain >
      </ReadingRoomBody >
    </DefaultLayout >

  )
}

