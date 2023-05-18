import React from 'react'
import Article from '../components/Article.js'
import SearchLayout from '../components/layouts/SearchLayout.js'
import ArticleListing from '../components/ArticleListing.js'




export const meta = {
  title         : 'Search',
  layout        : 'page',
  publishDate   : '2023-01-01',
  modifiedDate  : false,
  seoDescription: 'This page lists all articles with a given tag.'
}

export default function Search (props) {
  const renderListItems = posts => {
    const tagTopic = props.router.query.q

    const items = posts
    .filter(post => post.tags.includes(tagTopic))
    .map((post, index) => (
      <ArticleListing key = {index} article = {post} index = {index}/>
    ))

    if (items.length) {
      return items
    } else {
      return <h2 key = "not-found-headline">No results</h2 >
    }
  }


  const articlePosts = props.allData.filter(content => content.type === 'article')
  return (
    <SearchLayout >
      <h1 >
        {/* Articles tagged: {props.router.query.q} */}
      </h1 >

    </SearchLayout >

  )
}



Search.defaultProps = {
  allData: []
}
