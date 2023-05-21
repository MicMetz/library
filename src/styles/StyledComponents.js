import styled from 'styled-components'




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
  font-size: ${(props) => props.main ? '3rem' : '2rem'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  height: fit-content;
  color: #d3743a;
  max-width: 100%;
  background: linear-gradient(121.57deg, #171748 18.77%, rgba(0, 0, 0, 0.75) 60.15%);
  -webkit-background-clip: text;
  margin-top: 4rem;
  padding: ${(props) => props.main ? '1rem 0 0.5rem' : '0'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    //line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`
