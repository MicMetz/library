import React from 'react'
import Link from 'next/link'




function tagMaker (tagList) {
  let alphabetizedTags = tagList.sort()
  return (
    <div className = {`tag-container`}>
      {alphabetizedTags.map((tag, index) => {
        return (
          <Link href = {`/tags/${tag}`} key = {index}>
            <a className = {`tag`}>{tag}</a >
          </Link >
        )
      })}
    </div >
  )
}


const TagBlock = props => {
  if (!props.tags || !Array.isArray(props.tags)) {
    return null
  }
  return tagMaker(props.tags)
}

export default TagBlock
