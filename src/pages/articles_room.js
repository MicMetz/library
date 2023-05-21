import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ArticleMapBody, ArticleMapMain } from '../styles/ArticleMapStyledComponents.js'
import  DefaultLayout  from '../components/layouts/DefaultLayout.js'
import { Sidebar } from '../components/Sidebar.js'




export default function Articles_room () {
  return (
    <>
    <DefaultLayout >
      <Head >
        <title >Article Map</title >
        <meta name = "description" content = "initial-scale=1.0, width=device-width"/>
      </Head >
      <ArticleMapBody >
        <Sidebar header = {'Article Map'} chapters = {[]}/>

      </ArticleMapBody >

      <ArticleMapMain >

      </ArticleMapMain >
    </DefaultLayout >
    </>
  )
}
