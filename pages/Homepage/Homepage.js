import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../../components/Layout.js'
import { SideBar } from '../../components/SideBar.js'
import { HomeArticleFeatured, HomeArticleFeaturedCover, HomeArticleFeaturedCoverImage, HomeBody, HomeFooter, HomeMain } from './HomepageStyles.js'

import Image from 'next/image'




export default function Homepage () {

  return (
    <HomeBody >
      <SideBar
        title = "The Shape of Design"
        chapters = {[]}
      />
      {/*  <ArticleContainer >
       <div className = "cover">
       <img src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/884633/cover.svg" alt = "The Shape of Design cover"/>
       </div >
       <blockquote >
       “If you create things, the book’s insights will inform the way you think about your work, regardless of how you make your living.”
       <br />
       <Link href = "/">The Atlantic</Link >
       </blockquote >
       <blockquote >
       “From the very first line, Frank grabs you by the neurons and heartstrings, and doesn’t let go until the very last.”
       <br />
       <Link href = "https://www.brainpickings.org/2012/04/23/the-shape-of-design-frank-chimero/">Brain Pickings</Link >
       </blockquote >
       </ArticleContainer > */}
      <HomeMain >

        <HomeArticleFeaturedCover >
          <HomeArticleFeaturedCoverImage src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/884633/cover.svg" alt = "The Shape of Design cover" width = {500} height = {500}/>
        </HomeArticleFeaturedCover >
      </HomeMain >

      <HomeFooter >
        <p >

        </p >
      </HomeFooter >
    </HomeBody >
  )
}
