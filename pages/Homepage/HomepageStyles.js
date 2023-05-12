import styled from 'styled-components'
import Image from 'next/image'




export const HomeBody = styled.section`
  background-color: white;
  line-height: 24px;
  padding: 0;
  font-family: Lyon, Georgia, serif;
  margin: 0 0 5rem;
  background-size: 100px 100px;
  background-blend-mode: multiply
`

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 9rem);
  margin: 0 auto;
  max-width: 70rem;
`

export const HomeBlockQuote = styled.blockquote`
  width: 25%;
  padding: 0 1rem;

  &first-child {
    order: 1;
  }

  &last-child {
    order: 3;
  }
`

export const HomeHeader = styled.header`
  font-family: 'PitchWeb', Courier, monospace
`

export const HomeFooter = styled.footer`
  max-width: 43rem;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 0.5rem 1rem 0;
  border-top: none;
  font-family: 'PitchWeb', Courier, monospace

`

export const HomeArticleFeatured = styled.div`
  width: calc(40% + 4rem);
  order: 2;
  padding: 0 2rem;
`

export const HomeArticleFeaturedCoverImage = styled(Image)`
  display: block;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  border-radius: 2px 1px 1px 2px;
  mix-blend-mode: normal;
  box-shadow: 0 0 10px 0 rgba(40, 42, 47, 0.1), -10px 10px 24px 10px rgba(40, 42, 47, 0.05), -30px 40px 30px 0 rgba(40, 42, 47, 0.1), -10px 10px 10px -5px rgba(40, 42, 47, 0.1);
`

export const HomeArticleFeaturedCover = styled.section`
  width: calc(40% + 4rem);
  order: 2;
  padding: 0 2rem
`
