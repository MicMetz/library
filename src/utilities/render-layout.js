import Article from '../components/Article.js'
import ArticleLayout from '../components/layouts/ArticleLayout'
import DefaultLayout from '../components/layouts/DefaultLayout.js'
import SearchLayout from '../components/layouts/SearchLayout'
import BlogLayout from '../components/layouts/ArticleLayout'




export function renderLayout (props, state) {
  const { Component }   = props
  const { articleData } = state
  const { layout }      = articleData

  if (!layout || !props.router) {
    return
  }

  switch (layout) {
    case 'article':
      return (
        <ArticleLayout >
          <Component {...props} articleData = {articleData}/>
        </ArticleLayout >
      )
    case 'search':
      return (
        <SearchLayout >
          <Component {...props} />
          {/* Put styled-jsx here */}
        </SearchLayout >
      )
    case 'article-post-list':
      return (
        <>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </>
      )
    case 'page':
    default:
      return (
        <DefaultLayout >
          <Component {...props} />
          {/* Put styled-jsx here */}
        </DefaultLayout >
      )
  }
}
