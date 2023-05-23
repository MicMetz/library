import React from 'react';
import {
  CompanyContainer,
  FooterContainer,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle, Slogan, SocialContainer, SocialIcons,
  SocialIconsContainer
} from '../styles/FooterStyledComponents';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillTwitterSquare
} from 'react-icons/ai';




export default function Footer({isMobile, isInitiallyLoaded}) {
  return (
    <>
      <FooterContainer isMobile={isMobile} isInitiallyLoaded={isInitiallyLoaded}>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call <AiFillPhone size="10px"/></LinkTitle>
            <LinkItem href="tel:314-343-3432">
              631-241-6006
            </LinkItem>
            <LinkTitle>Email <AiFillMail size="10px"/></LinkTitle>
            <LinkItem href="mailto:mime9599@colorado.edu">
              mime9599@colorado.edu
            </LinkItem>
          </LinkColumn>
        </LinkList>

        <CompanyContainer>
          <Slogan>
            <span>"There are decades</span>
            <br/>
            <span>where nothing happens;</span>
            <br/>
            <span>and there are weeks</span>
            <br/>
            <span>where decades happen."</span>
          </Slogan>
        </CompanyContainer>

        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/MicMetz">
              <AiFillGithub size="40px"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/michael-metzjer/">
              <AiFillLinkedin size="40px"/>
            </SocialIcons>
            <SocialIcons href="https://bsky.app/">
              <AiFillTwitterSquare size="40px"/>
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>

      </FooterContainer>
    </>
  );
}
