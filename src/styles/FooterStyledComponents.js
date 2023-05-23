import styled from 'styled-components';



export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  box-sizing: content-box;

  max-width: var(--footer-width);
  max-height: var(--footer-height);
  //width: 100%;

  bottom: 0;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: space-between;

  background-color: var(--background-color);
  color: cornsilk !important;

  padding: 5em;
  margin: 10rem 0;

  text-align: justify-all;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }

`;


export const SocialIcons = styled.a`
  position: relative;
  transition: 0.3s ease;
  color: var(--color-primary);
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: var(--color-secondary);
    transform: scale(1.1);
    cursor: pointer;
    color: var(--color-tertiary);
  }
`


export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0;

  @media ${props => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`


export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  max-gap: 10rem;
  padding: 2rem 1rem 1rem;

  @media ${props => props.theme.breakpoints.lg} {
    padding: 2rem 1rem 1rem;
    gap: 16px;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    padding: 2rem 1rem 1rem;
    gap: 16px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 2rem 1rem 1rem;
    gap: 5px;
  }
`

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% / 3);
  width: 100%;
`


export const LinkTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  left: 0;
  position: relative;

  text-transform: uppercase;
  color: var(--color-primary);
  //color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`


export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: cornsilk !important;
  margin-bottom: 16px;
  transition: .3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: var(--color-secondary);
    left: 1.5rem;
    cursor: pointer;
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

export const SocialIconsContainer = styled.div`
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

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  margin-bottom: 16px;

  @media ${props => props.theme.breakpoints.md} {
    flex-direction: column;
    margin-bottom: 0;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }


`;


export const Slogan = styled.p`
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
