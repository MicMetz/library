import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ArticleMapBody, ArticleMapMain } from '../styles/ArticleMapStyledComponents.js'
import  DefaultLayout  from '../components/layouts/DefaultLayout.js'
import { SideBar } from '../components/SideBar.js'




export default function ArticleMap () {
  return (
    <>
    <DefaultLayout >
      <Head >
        <title >Article Map</title >
        <meta name = "description" content = "initial-scale=1.0, width=device-width"/>
      </Head >
      <ArticleMapBody >
        <SideBar header = {'Article Map'} chapters = {[]}/>

      </ArticleMapBody >

      <ArticleMapMain >

      </ArticleMapMain >
    </DefaultLayout >
    </>
  )
}