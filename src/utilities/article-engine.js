import { articles } from './article-list.js'
import { pages } from './page-list'




export default async function ArticleEngine (type = 'all') {
  // these lists are already sorted from newest to oldest
  const [pageList, articlesList] = await Promise.all([pages(), articles()])

  // after combining the lists, they must be sorted again
  const allData       = [...pageList, ...articlesList]
  const sortedAllData = allData
  .sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch)
  .reverse()
  switch (type) {
    case 'articles':
      return articlesList
    case 'pages':
      return pageList
    case 'all':
    default:
      return sortedAllData
  }
};
