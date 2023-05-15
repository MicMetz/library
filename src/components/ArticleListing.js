import React from 'react'
import Link from 'next/link'
import TagBlock from './Tags'




export default function PostListing (props) {
  const { article, index } = props

  return (
    <React.Fragment key = {`article-list-${index}`}>
      <h2 key = {`${article.name}-headline`}>
        <Link href = {`/articles/${article.name}`}>
          <a >{article.title}</a >
        </Link >
      </h2 >
      <TagBlock tags = {article.tags}/>
    </React.Fragment >
  )
}
