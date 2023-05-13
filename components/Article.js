import Link from 'next/link'




export default function ArticleCover ({ article }) {
  return (
    <div className = "Cover">
      <Link href = {`/articles/${article.sug}`}>
        <a >
          <img src = {article.coverImage} alt = {article.title}/>
        </a >
      </Link >
      <div className = "article-cover__text">
        <h3 >{article.title}</h3 >
        <p >{article.excerpt}</p >
      </div >
    </div >
  )
}
