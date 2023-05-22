import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { Navigation } from '../components/Navigation.js'
import { Sidebar } from '../components/Sidebar.js'
import Image from 'next/image'
import { Readings } from '/src/pages/api/Readings.js'
import { ArticleByline, ArticleFeaturedAtrribution, ArticleFeaturedCoverImage, ArticleFeaturedTagline, ArticlePage, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'
import { ReadingRoomBody, ReadingRoomBookContainer, ReadingRoomMain } from '../styles/ReadingRoomStyledComponents.js'
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'
import { ArticleFeaturedDescription } from '../tools/DescriptionParser.js'




export default function Reading_room (isToggleOpen, toggleOpen, isIntro) {
  const [activeReading, setActiveReading] = useState(Readings.find((book) => book.id === 0))

  const navRef   = useRef({ isToggleOpen, toggleOpen })
  const introRef = useRef(isIntro)

  useEffect(() => {
    let isMounted = true
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      isMounted = false
    }
  }, [])


  const loadActiveReading = (book) => {
    if (book === null && activeReading !== null) {
      return
    } else if (book !== null) {
      setActiveReading(book)
    }
  }


  const handleScroll = () => {
    const observer = new IntersectionObserver(intersections => {
      intersections.forEach((intersection) => {
        if (intersection.intersectionRatio > 0.5) {
          loadActiveReading(Readings[ intersection.target.id ])
        }
      })
    }, {
      threshold: 0.5
    })

    document.querySelectorAll('section[id]').forEach((section) => {
      if (section !== null) {
        observer.observe(section)
      }
    })
  }

  return (
    <DefaultLayout >
      <Navigation isOpen = {isToggleOpen} toggleOpen = {toggleOpen} isIntro = {isIntro} forwardRef = {navRef}/>

      <Head >
        <title >Reading List</title >
        <link rel = "icon" href = "/icons/logo.svg"/>
      </Head >

      <ReadingRoomBody >
        <Sidebar header = {activeReading.header} chapters = {activeReading.chapters}/>
        <ReadingRoomMain >

          <SectionTitle main>Reading List</SectionTitle >
          {Readings.map((book, index) => {

            return (
              <ContentBlock key = {index} value = {book} id = {index} innerRef = {c => this.myRef = c}>

                {ArticleFeaturedDescription(book)}
                <ArticleFeaturedAtrribution >
                  <ArticleTitle >{book.header.title}</ArticleTitle >
                  <ArticleSubtitle >{book.header.subtitle}</ArticleSubtitle >
                  <ArticleByline >{book.author}</ArticleByline >
                </ArticleFeaturedAtrribution >
                <ArticleFeaturedCoverImage src = {book.cover} alt = {book.header.title}/>
                <ArticleFeaturedTagline >
                  <ul >
                    <li >
                      <a href = {book.link} target = "blank">Read More</a >
                    </li >
                    {book.tags.map((tag, id) => {
                      return (
                        <li key = {id}><a href = {tag.link} target = "blank">{tag.name}</a ></li >
                      )
                    })}
                  </ul >

                </ArticleFeaturedTagline >
              </ContentBlock >
            )
          })}
        </ReadingRoomMain >
      </ReadingRoomBody >
    </DefaultLayout >
  )
}

