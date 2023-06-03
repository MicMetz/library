import styled from 'styled-components'



export const ReadingWallBody = styled.div`
  padding: 4rem 2rem 0 !important;
  line-height: 24px;
  //background-size: 100px 100px;
  background-blend-mode: multiply;
  min-height: 100vh;
  max-width: 100vw;
`

export const ReadingWallMain = styled.main`
  display: block;
  align-items: center;
  justify-content: space-around;
  //height: calc(100vh - 9rem);
  margin: 0 auto;
  //max-width: 99vw;
  width: 100%;
  height: 100%;
`


export const ReadingWallBookCoverImage = styled.img`
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: calc(100vw - 10rem);
  height: 100%;

  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.25rem #000000FF;
  margin: 0 auto;
  padding: 0.5rem 1rem 0;
  border-top: none;

  @media ${props => props.theme.breakpoints.sm} {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
  }
`

export const ReadingWallBookFooter = styled.footer`

`

export const ReadingWallBookAtrribution = styled.div`
  display: inline-block;
  flex-direction: column;
  order: 3;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem 0;
  //padding: 0.5rem 1rem 0;
  border-top: none;

  @media ${props => props.theme.breakpoints.sm} {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
  }

  @media ${props => props.theme.breakpoints.lg} {
    max-width: calc(100% - 2rem);
    max-height: calc(100% - 2rem);
  }
`


export const ReadingWallBookDetails = styled.div`
  display: inline-block;
  position: relative;

  max-width: 40%;
  order: 1;
  padding: 0 2rem;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }

`



export const ReadingWallBookContainer = styled.section`
  display: flex;
  //position: absolute;
  height: fit-content;
  width: 100%;
  margin: 8rem auto;
  padding: 0;

  &button {
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: calc(100vw - 10rem);
    height: 100%;
    margin: 0 auto;
    padding: 0.5rem 1rem 0;

    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem #000000FF;
    border-top: none;
    background-color: #000000FF;
    color: #FFFFFFFF;

    &:hover {
      background-color: #000000FF;
      color: #FFFFFFFF;

      &::after {
        background-color: #000000FF;
        color: #FFFFFFFF;
      }

      &::before {

      }
    }
  }
`

