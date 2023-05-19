import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'
import { ArticleByline, ArticleFeaturedAtrribution, ArticleFeaturedCoverImage, ArticleFeaturedDetails, ArticleFeaturedFooter, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'
import { HomeBody, HomeMain } from '../styles/HomepageStyledComponents.js'
import { CurrentReadings } from '/public/datasets/CurrentReadings.js'
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'
import { ArticleFeaturedDescription } from '../tools/DescriptionParser.js'




export default function Homepage () {
  const [activeFeature, setActiveFeature]   = useState(CurrentReadings[ 0 ])
  const [scrollPosition, setScrollPosition] = useState()
  const ref                                 = useRef(null)


  const onScreen = (element) => {
    const rect       = element.getBoundingClientRect()
    const elemTop    = rect.top
    const elemBottom = rect.bottom

    // Only completely visible elements return true:
    const isVisible = ( elemTop >= 0 ) && ( elemBottom <= window.innerHeight )
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])


  const loadActiveReading = (book) => {
    if (book === null && activeFeature !== null) {
      return
    } else if (book !== null) {
      setActiveFeature(book)
    }
  }


  const handleScroll = () => {
    const position     = window.pageYOffset
    const windowHeight = window.innerHeight
    const content      = document.getElementsByClassName('featured')

    for (let i = 0; i < content.length; i++) {
      if (onScreen(content[ i ])) {
        loadActiveReading(CurrentReadings[ i ])
      }
    }
  }



  return (
    <DefaultLayout >
      <Head >
        <title >Home</title >
      </Head >

      <HomeBody >
        <SideBar header = {activeFeature.header} chapters = {activeFeature.chapters}/>
        <HomeMain >

          <SectionTitle main>Current Reading</SectionTitle >
          {CurrentReadings?.map(book => {

            return (
              <ContentBlock key = {book.id} value = {book} className = "featured" ref = {ref}>

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
              </ContentBlock >
            )
          })}
        </HomeMain >
      </HomeBody >
    </DefaultLayout >

  )
}

