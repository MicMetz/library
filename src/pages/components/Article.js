import Link from 'next/link'
import { Page, PageBody, PageFooter, PageHeader, PageHeaderTitle } from '../../styles/PageStyledComponents.js'
import { ArticleContainer } from '../../styles/StyledComponents.js'




export default function Article ({ article }) {
  return (
    <ArticleContainer >
      {article?.map(({ id, title, content }) => (
        <Page key = {id}>
          <PageHeader >
            <PageHeaderTitle >{title}</PageHeaderTitle >
          </PageHeader >
          <PageBody >
            {content.map((paragraph, index) => {
                return (
                  <p key = {index}>{paragraph.split('\n').map((item, key) => {
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
          </PageBody >
          <PageFooter >
            <Link href = {`/articles/${id}`} passHref>
              <a >Read More</a >
            </Link >
          </PageFooter >
        </Page >
      ))}
    </ArticleContainer >
  )
}
