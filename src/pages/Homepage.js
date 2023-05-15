import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'
import { ArticleByline, ArticleSubtitle, ArticleTitle } from '../styles/ArticleStyledComponents.js'

import { HomeArticleFeaturedAtrribution, HomeArticleFeaturedCoverImage, HomeArticleFeaturedDetails, HomeBody, HomeFooter, HomeMain } from '../styles/HomepageStyledComponents.js'
import KillAnythingThatMovesCover from '/public/images/KillAnythingThatMoves.jpg'
import { CurrentReadings } from '/public/datasets/CurrentReadings.js'
import { ContentBlock } from '../styles/StyledComponents.js'




export default function Homepage () {

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



  //
  // useEffect(() => {
  //   loadCurrentReading()
  // }, [])



  return (
    <DefaultLayout >
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

          {CurrentReadings.map((book, index) => {
            return (
              <div key = {index}>
                <ContentBlock >

                  {loadCurrentReadingDescription(book, index)}
                  {/* <HomeArticleFeaturedDetails > */}
                  {/*   {book.description.map((paragraph, i) => { */}
                  {/*       return ( */}
                  {/*         <p key = {i}> */}
                  {/*           {paragraph.split('\n').map((item, key) => { */}
                  {/*             return ( */}
                  {/*               <span key = {key}> */}
                  {/*                 {item} */}
                  {/*                 <br /> */}
                  {/*               </span > */}
                  {/*             ) */}
                  {/*           })}</p > */}
                  {/*       ) */}
                  {/*     } */}
                  {/*   )} */}
                  {/* </HomeArticleFeaturedDetails > */}

                  <HomeArticleFeaturedCoverImage src = {book.cover} alt = {book.header.title} width = {300} height = {350}/>
                  <HomeArticleFeaturedAtrribution >
                    <ArticleTitle >{book.header.title}</ArticleTitle >
                    <ArticleSubtitle >{book.header?.subtitle}</ArticleSubtitle >
                    <ArticleByline >{book.author}</ArticleByline >
                  </HomeArticleFeaturedAtrribution >
                </ContentBlock >
              </div >
            )
          })}
        </HomeMain >
      </HomeBody >
    </DefaultLayout >

  )
}

