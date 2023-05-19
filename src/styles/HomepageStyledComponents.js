import styled from 'styled-components'
import Image from 'next/image'




export const HomeBody = styled.div`
  padding: 4rem 2rem 0 !important;
  line-height: 24px;
  //background-size: 100px 100px;
  background-blend-mode: multiply;
  min-height: 100vh;
  max-width: 100vw;
`

export const HomeMain = styled.main`
  display: block;
  align-items: center;
  justify-content: space-around;
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
