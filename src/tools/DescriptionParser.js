import React from 'react'
import { DefaultDetails } from "../styles/StyledComponents.js";




export function DescriptionParser (book) {
  return (
    <DefaultDetails key = {book.id}>
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
    </DefaultDetails >
  )
}
