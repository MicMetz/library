import { motion } from "framer-motion";
import styled from 'styled-components'





export const StyledLayout = styled( motion.main )`
  max-width: 96vw;
  margin: var(--space-l) 0 var(--space-128);
  padding: 0 var(--space-l);
  @media (max-width: 768px) {
    margin: var(--space-s) auto var(--space-2xl);
    padding: 0 var(--space-m);
  }
  @media (max-width: 576px) {
    margin: var(--space-xs) auto var(--space-xl);
    padding: 0 var(--space-xs);
  }
`;

export const DefaultBody = styled.div`
  padding: 4rem 2rem 0 !important;
  line-height: 24px;
  //background-size: 100px 100px;
  background-blend-mode: multiply;
  min-height: 100vh;
  max-width: 100vw;
`

export const DefaultMain = styled.main`
  display: block;
  align-items: center;
  justify-content: space-around;
  //height: calc(100vh - 9rem);
  margin: 0 auto;
  //max-width: 99vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`


export const DefaultDetails = styled.div`
  display: inline-block;
  position: relative;

  max-width: 40%;
  order: 1;
  padding: 0 2rem;
  text-align: left;
  margin: 5rem 1rem 0 auto;
  width: 100%;
  height: 100%;

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }
`

export const DefaultBlockQuote = styled.blockquote`
  max-width: calc(100vw - 20rem);
  margin: 0 auto;
  padding: 0 2rem;
`

export const DefaultQuoteText = styled.p`
  font-family: 'PitchWeb', Courier, monospace;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: var(--color-quinary);
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  max-width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

export const DefaultHeader = styled.header`
  font-family: 'PitchWeb', Courier, monospace
`


export const ContentBlock = styled.section`
  display: flex;
  //position: absolute;
  height: fit-content;
  width: 100%;
  margin: 10rem auto;
  padding: 0;


  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

`



export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: ${( props ) => props.main ? '3rem' : '2rem'};
  line-height: ${( props ) => props.main ? '72px' : '56px'};
  width: max-content;
  height: fit-content;
  color: #d3743a;
  max-width: 100%;
  background: linear-gradient(121.57deg, #171748 18.77%, rgba(0, 0, 0, 0.75) 60.15%);
  -webkit-background-clip: text;
  margin-top: 4rem;
  padding: ${( props ) => props.main ? '1rem 0 0.5rem' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${( props ) => props.main ? '56px' : '48px'};
    line-height: ${( props ) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${( props ) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    //line-height: 40px;
    font-size: ${( props ) => props.main ? '28px' : '32px'};
    line-height: ${( props ) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${( props ) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`
