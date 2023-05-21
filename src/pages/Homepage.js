import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'
import { ArticleByline, ArticleFeaturedAtrribution, ArticleFeaturedCoverImage, ArticleFeaturedDetails, ArticleFeaturedTagline, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'
import { HomeBody, HomeMain } from '../styles/HomepageStyledComponents.js'
import { Current } from '/public/datasets/Current.js'
import { ContentBlock, SectionTitle } from '../styles/StyledComponents.js'
import { ArticleFeaturedDescription } from '../tools/DescriptionParser.js'




export default function Homepage () {
  const [activeFeature, setActiveFeature]   = useState(Current[ 0 ])
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
    // const position     = window.pageYOffset

    const observer = new IntersectionObserver(intersections => {
      intersections.forEach((intersection) => {
        if (intersection.intersectionRatio > 0.5) {
          loadActiveReading(Current[ intersection.target.id ])
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
      <Head >
        <title >Home</title >
      </Head >

      <HomeBody >
        <SideBar header = {activeFeature.header} chapters = {activeFeature.chapters}/>
        <HomeMain >

          <SectionTitle main>Current Reading</SectionTitle >
          {Current?.map((book, index) => {

            return (
              <ContentBlock key = {index} value = {book} id = {index}>
                {/* <ContentBlock key = {index}> */}

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
                    {book.tags.map((tag, index) => {
                      return (
                        <li key = {index}><a href = {tag.link} target = "blank">{tag.name}</a ></li >
                      )
                    })}
                  </ul >

                </ArticleFeaturedTagline >
              </ContentBlock >
            )
          })}

        </HomeMain >
      </HomeBody >
    </DefaultLayout >

  )
}

