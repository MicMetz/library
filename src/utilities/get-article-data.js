import ArticleEngine from './article-engine.js'
import ArticleData from './article-engine.js'




export default async function GetArticleData (router) {
  if (!router) {
    return
  }

  const splitRoute = router.route.split('/')
  let compName     = splitRoute.length > 0 ? splitRoute[ splitRoute.length - 1 ] : null

  compName = router.pathname === '/' ? 'index' : compName

  // get page data based on file name
  let allPageData
  try {
    allPageData = await ArticleEngine()
  } catch (error) {
    console.log(`Error getting article and page lists: ${error}`)
  }

  const articleData = allPageData.filter(
    component => component.name === compName
  )

  return Promise.resolve(articleData[ 0 ])
}
