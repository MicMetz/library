import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Navigation} from '../components/nav/Navigation.js'
import {Readings} from './api/Readings.js'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import {Sidebar} from '../components/Sidebar.js'
import {
  ArticleByline,
  ArticleFeaturedAtrribution,
  ArticleFeaturedCoverImage,
  ArticleFeaturedDetails,
  ArticleFeaturedTagline,
  ArticleSubtitle,
  ArticleTitle
} from '../styles/ArticleStyledComponents.js'
import {HomeBody, HomeMain} from '../styles/HomepageStyledComponents.js'
import {Current} from '/src/pages/api/Current.js'
import {ContentBlock, SectionTitle} from '../styles/StyledComponents.js'
import {ArticleFeaturedDescription} from '../tools/DescriptionParser.js'
import Footer from '../components/Footer';




export default function Homepage(forwardRef, open, toggle) {
  const [activeFeature, setActiveFeature]   = useState(Current[0])
  const [scrollPosition, setScrollPosition] = useState()
  const navRef                              = useRef({open, toggle})
  const ref                                 = useRef(forwardRef)
  // const [staticData, dynamicData, revalidatedData] = await Promise.all([
  //   fetch(`https://...`),
  // fetch(`https://...`, {cache: 'no-store'}),
  // fetch(`https://...`, {next: {revalidate: 10}}),
  // ])


  useEffect(() => {
    let isMounted = true
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      isMounted = false
    }
  }, [])


  const loadActiveReading = (feature) => {
    if (feature === null && activeFeature !== null) {
      return
    } else if (feature !== null) {
      setActiveFeature(feature)
    }
  }


  const handleScroll = () => {
    const observer = new IntersectionObserver(intersections => {
      intersections.forEach((intersection) => {
        if (intersection.intersectionRatio > 0.5) {
          loadActiveReading(Readings[intersection.target.id])
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
    <DefaultLayout>
      <Navigation open={open} toggle={toggle} forwardRef={ref}/>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/icons/favicon.svg"/>
      </Head>

      <HomeBody>
        <Sidebar header={activeFeature.header} chapters={activeFeature.chapters}/>
        <HomeMain>

          <SectionTitle main>Current Reading</SectionTitle>
          {Current?.map((book, index) => {

            return (
              <ContentBlock key={index} value={book} id={index}>
                {/* <ContentBlock key = {index}> */}

                {ArticleFeaturedDescription(book)}
                <ArticleFeaturedAtrribution>
                  <ArticleTitle>{book.header.title}</ArticleTitle>
                  <ArticleSubtitle>{book.header.subtitle}</ArticleSubtitle>
                  <ArticleByline>{book.author}</ArticleByline>
                </ArticleFeaturedAtrribution>
                <ArticleFeaturedCoverImage src={book.cover} alt={book.header.title}/>
                <ArticleFeaturedTagline>
                  <ul>
                    <li>
                      <a href={book.link} target="blank">Read More</a>
                    </li>
                    {book.tags.map((tag, id) => {
                      return (
                        <li key={id}><a href={tag.link} target="blank">{tag.name}</a></li>
                      )
                    })}
                  </ul>
                </ArticleFeaturedTagline>
              </ContentBlock>
            )
          })}
        </HomeMain>
      </HomeBody>

      <Footer/>
    </DefaultLayout>

  )
}

