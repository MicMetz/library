import styled from 'styled-components'
import Image from 'next/image'




export const HomeBody = styled.div`
  //margin-left: calc(100vw - 80vw) !important;
  margin-left: 8vw !important;
  padding: 4rem 2rem 0 !important;
  line-height: 24px;
  //background-size: 100px 100px;
  background-blend-mode: multiply;
`

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 9rem);
  margin: 0 auto;
  max-width: 95vw;
  width: 100%;
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


export const HomeArticleFeaturedDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  position: relative;
  width: 100%;
  height: calc(100vh - 9rem);
  order: 1;
  padding: 0 2rem;
  margin-top: 6rem;
  text-align: left;

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }
`

export const HomeArticleFeaturedAtrribution = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: left;
  position: relative;
  width: calc(40% + 4rem);
  padding: 0 2rem;
  order: 3;
`

export const HomeArticleFeaturedCoverImage = styled.img`
  display: block;
  margin: 4rem;
  width: 100%;
  height: 100%;
  max-width: calc(100vw - 20rem);
  max-height: calc(100vh - 15rem);
  border-radius: 2px 1px 1px 2px;
  mix-blend-mode: normal;
  box-shadow: 0 0 10px 0 rgba(40, 42, 47, 0.1), -10px 10px 24px 10px rgba(40, 42, 47, 0.05), -30px 40px 30px 0 rgba(40, 42, 47, 0.1), -10px 10px 10px -5px rgba(40, 42, 47, 0.1);
  order: 2;

`
//
// export const HomeArticleFeaturedCoverImage = styled(Image)`
//   display: block;
//   margin: 0 auto;
//   width: auto;
//   height: 100%;
//   max-width: 28vw;
//   max-height: calc(100vh - 12rem);
//   border-radius: 2px 1px 1px 2px;
//   mix-blend-mode: normal;
//   box-shadow: 0 0 10px 0 rgba(40, 42, 47, 0.1), -10px 10px 24px 10px rgba(40, 42, 47, 0.05), -30px 40px 30px 0 rgba(40, 42, 47, 0.1), -10px 10px 10px -5px rgba(40, 42, 47, 0.1);
// `

export const HomeArticleFeaturedCover = styled.section`
  width: calc(40% + 4rem);
  padding: 0 2rem
`
