import styled from 'styled-components'
import Image from 'next/image'




export const HomeBody = styled.div`
  //margin-left: calc(100vw - 80vw) !important;
  margin-left: 8vw !important;
  padding: 4rem 2rem 0 !important;
  line-height: 24px;
  //background-size: 100px 100px;
  background-blend-mode: multiply;
  min-height: 100vh;
  max-width: 100vw;
`

export const HomeMain = styled.main`
  display: flex;
  //align-items: center;
  //justify-content: space-around;
  //height: calc(100vh - 9rem);
  margin: 0 auto;
  //max-width: 99vw;
  width: 100%;
  height: 100%;
  
`

export const HomeBlockQuote = styled.blockquote`
  width: 25%;
  padding: 0 1rem;

  &first-child {
    //order: 1;
  }

  &last-child {
    //order: 3;
  }
`

export const HomeHeader = styled.header`
  font-family: 'PitchWeb', Courier, monospace
`

export const HomeFooter = styled.footer`
  max-width: 100%;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 0.5rem 1rem 0;
  border-top: none;
  font-family: 'PitchWeb', Courier, monospace

`

export const HomeArticleFeaturedDetails = styled.section`
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  position: relative;
  max-width: 30%;
  //height: calc(100vh - 9rem);
  order: 1;
  padding: 0 2rem;
  margin-top: 6rem;
  text-align: left;
  //top: calc(10% - 3rem);
  

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }
`

export const HomeArticleFeaturedAtrribution = styled.section`
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;

  position: relative;
  max-width: calc(100vw - 80vw);
  top: calc(0 + 10rem);
  padding: 0 2rem;
  order: 3;
`

export const HomeArticleFeaturedCoverImage = styled.img`
  display: inline-block;
  margin: 1rem auto;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 35%;
  
  max-height: calc(100vh - 9rem);
  border-radius: 2px 1px 1px 2px;
  mix-blend-mode: normal;
  box-shadow: 0 0 10px 0 rgba(40, 42, 47, 0.1), -10px 10px 24px 10px rgba(40, 42, 47, 0.05), -30px 40px 30px 0 rgba(40, 42, 47, 0.1), -10px 10px 10px -5px rgba(40, 42, 47, 0.1);
  order: 2;
`
