import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
import { Page, PageBody, PageFooter, PageHeader, PageHeaderTitle } from '../styles/PageStyledComponents.js'
import { ArticleContainer } from '../styles/StyledComponents.js'
import ArticleLayout from './layouts/ArticleLayout.js'


import { Heading, Text, Code } from './MDXComponents.js'




const ResponsiveImage = (props) => (
  <Image alt = {props.alt} layout = "responsive" {...props} />
)

const components = {
  h1: (props) => <Heading level = {1} {...props} />,
  h2: (props) => <Heading level = {2} {...props} />,
  h3: (props) => <Heading level = {3} {...props} />,
  h4: (props) => <Heading level = {4} {...props} />,
  h5: (props) => <Heading level = {5} {...props} />,
  h6: (props) => <Heading level = {6} {...props} />,

  p     : (props) => <Text type = "p" {...props} />,
  span  : (props) => <Text type = "span" {...props} />,
  strong: (props) => <Text type = "strong" {...props} />,
  em    : (props) => <Text type = "em" {...props} />,
  del   : (props) => <Text type = "del" {...props} />,
  code  : (props) => <Code {...props} />,
  a     : (props) => <Text type = "a" {...props} />,

  Image: (props) => <ResponsiveImage {...props} />,

  pre: (props) => <pre {...props} />,
}



export default function Article ({ article }) {
  return (
    <ArticleLayout >
      <ArticleContainer >
        {article?.map(({ id, title, content }) => (
          <Page key = {id}>
            <PageHeader >
              <PageHeaderTitle >{title}</PageHeaderTitle >
            </PageHeader >
            <PageBody >
              <MDXProvider components = {components}>
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
              </MDXProvider >
            </PageBody >
            <PageFooter >
              <Link href = {`/articles/${id}`} passHref>
                <a >Read More</a >
              </Link >
            </PageFooter >
          </Page >
        ))}
      </ArticleContainer >
    </ArticleLayout >
  )
}
