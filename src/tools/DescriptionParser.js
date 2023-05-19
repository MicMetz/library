import React from 'react'
import { ArticleFeaturedDetails } from '../styles/ArticleStyledComponents.js'




export function ArticleFeaturedDescription (book) {
  return (
    <ArticleFeaturedDetails key = {book.id}>
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
    </ArticleFeaturedDetails >
  )
}
