import matter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'




const articlesDirectory = join(process.cwd(), 'articles')

export default function getArticleBySlug (slug) {
  const realSlug          = slug.replace(/\.md$/, '')
  const fullPath          = join(articlesDirectory, `${realSlug}.md`)
  const fileContents      = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    meta: data,
    content
  }
}



export function getAllArticles () {
  const slugs    = fs.readdirSync(articlesDirectory)

  const articles = slugs.map((slug) => {
    const source   = fs.readFileSync(join(articlesDirectory, slug), 'utf8')
    const { data } = matter(source)

    return data
  })

  return articles
}
