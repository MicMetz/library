import ArticleLayout from '../../components/layouts/ArticleLayout.js'
import getArticleBySlug from '../../tools/GetSlug.js'
import GetArticleData from '../../utilities/get-article-data.js'
import ConvertMarkdownToHtml from '../../tools/ConvertMarkdown.js'




export default function Doc ({ meta, content }) {
  return <ArticleLayout meta = {meta}>{content}</ArticleLayout >
}


export async function getStaticProps ({ params }) {
  const doc     = getArticleBySlug(params.slug)
  const content = await ConvertMarkdownToHtml(doc.content || '')

  return {
    props: {
      ...doc,
      content,
    },
  }
}


export async function getStaticPaths () {
  const docs = GetArticleData()

  return {
    paths   : docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      }
    }),
    fallback: false,
  }
}
