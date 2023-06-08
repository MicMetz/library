import styled from "styled-components"
import { breakpoints } from "../constants/breakpoints.js";



export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  align-items: center;
  justify-content: space-between;
  display: flex;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const FooterLinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: black;
  //color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: .3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`

export const FooterSocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`

export const FooterCompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;


  @media ${props => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`


export const FooterSlogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`

export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`


export const FooterLinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media ${props => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`

export const FooterLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`
export const FooterLinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: black;
  //color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`



export const FooterSocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  margin: var(--space-m) 0 var(--space-2xs);
  grid-gap: var(--space-xs);

  a {
    color: var(--color-gray-400);
    fill: currentColor;
    padding: 0;
    margin: 0;
  }

  svg {
    width: 32px;
    height: 32px;
    transition: all 0.3s ease-in-out;

    :hover {
      cursor: pointer;
      fill: var(--color-bright-crimson);
    }
  }
`;


export const FooterSitemapList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  grid-gap: var(--space-3xs) var(--space-l);
  padding-inline-start: 0;

  li span {
    color: var(--color-gray-600);
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1400px;
  margin: var(--space-m) auto;
  padding: 0 var(--space-l);
  @media ${breakpoints.mediaMD} {
    margin: var(--space-m) auto;
    padding: 0 var(--space-m);
    grid-template-columns: 1fr;
  }
  @media ${breakpoints.mediaSM} {
    margin: var(--space-xs) auto;
    padding: 0 var(--space-xs);
    grid-template-columns: 1fr;
  }
`;

export const StyledFooter = styled.footer`
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-gray-300);
  z-index: -1;
`;
