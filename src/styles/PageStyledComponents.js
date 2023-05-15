import styled from 'styled-components'




export const PageHeader = styled.header`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 30rem;
  text-align: center;
`

export const PageHeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const PageHeaderSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const PageHeaderDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0 auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const PageHeaderImage = styled.img`
  width: 100%;
  max-width: 30rem;
  margin: 2rem auto;
`

export const PageHeaderImageCaption = styled.span`
  font-size: 0.75rem;
  font-family: "PitchWeb", Courier, monospace;
  color: rgba(0, 0, 0, 0.5);
  display: block;
  margin: 0 auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const PageHeaderImageCredit = styled.span`
  font-size: 0.75rem;
  font-family: "PitchWeb", Courier, monospace;
  color: rgba(0, 0, 0, 0.5);
  display: block;
  margin: 0 auto;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`

export const Page = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 30rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  letter-spacing: 0.01em;
  word-spacing: 0.01em;
  font-weight: 400;
  font-family: "PitchWeb", Courier, monospace;
  color: #374151;
  background-color: #fff;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  a {
    color: #d3743a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #d3743a;
    }

    &:active {
      color: #d3743a;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: 2px solid #d3743a;
    }
  }

  //h1, h2, h3, h4, h5, h6 {
  //  font-family: "PitchWeb", Courier, monospace;
  //  font-weight: 600;
  //  color: #d3743a;
  //  margin: 2rem auto 1rem;
  //  -webkit-font-smoothing: subpixel-antialiased;
  //  -moz-osx-font-smoothing: auto;
  //}
  //

`

export const PageBody = styled.div`

`

export const PageFooter = styled.footer`

`
