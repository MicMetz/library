// import  config  from '../../config/config.yml'
import next from 'next'
import { formatDate, getSecondsSinceEpoch } from './formatters'




const articlesFileNames = () => {
  const postFileNames =
          preval`module.exports = require("fs").readdirSync("./pages/articles")` ||
          []
  return Promise.resolve(postFileNames)
}

const createArticleList = fileNameList => {
  return fileNameList.reduce((collection, name) => {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    const { default: Component } = require(`../pages/articles/${name}`)
    const {
            title,
            tags,
            layout,
            publishDate,
            modifiedDate,
            hideProgressBar = false,
            exclude         = false,
            ...moreMeta // any extra properties a post may have
          }                      = require(`../pages/articles/${name}`).meta

    if (exclude) {
      return collection
    }

    // remove the extension from the file name to make a component name string
    const cleaned_name = name.split('.')[ 0 ]

    // This is used to sort pages/posts
    const formattedPublishDate  = formatDate(publishDate)
    const formattedModifiedDate = formatDate(modifiedDate, true)
    const secondsSinceEpoch     = getSecondsSinceEpoch(publishDate)

    // data that is returned for each page
    collection.push({
      Component,
      title,
      tags,
      layout,
      publishDate,
      formattedPublishDate,
      modifiedDate,
      formattedModifiedDate,
      exclude,
      urlPath     : `/${cleaned_name}`,
      fullUrlPath : `/articles/${cleaned_name}`,
      canonicalUrl: `${next.baseUrl}/${cleaned_name}`,
      hideProgressBar,
      name        : cleaned_name,
      type        : 'article',
      secondsSinceEpoch,
      ...moreMeta // any extra properties a post may have
    })

    return collection
  }, [])
}


export function articles () {
  return articlesFileNames()
  .then(fileNameList => {
    const postList = createArticleList(fileNameList)
    return postList
    .sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch)
    .reverse()
  })
  .catch(error => console.log('Error creating Article List', error))
}
