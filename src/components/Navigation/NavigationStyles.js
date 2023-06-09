// noinspection CssOverwrittenProperties,CssReplaceWithShorthandSafely

import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { IoIosArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'



export const RightHandSide = styled.div`
  display: flex;
  align-items: center;
`;


export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  min-width: 200px;
  margin-left: var(--space-s);
  margin-right: var(--space-s);
  transition: all 0.3s ease-in-out;
`;


export const OutsideDropdown = styled( motion.div )`
  //div.outside-dropdown div {
  margin-left: var(--space-s);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  transition: color 0.2s ease-in-out;

  span {
    color: var(--color-gray-800);
  }

  :hover {
    span {
      color: var(--color-crimson);
    }
  }

`;


export const MainNav = styled.div`
  display: flex;
  flex-shrink: 0;

  div.outside-dropdown div {
    margin-left: var(--space-s);
    text-decoration: none;
    font-size: var(--font-size-xs);
    font-family: var(--font-sans);
    transition: color 0.2s ease-in-out;

    span {
      color: var(--color-gray-800);
    }

    :hover {
      span {
        color: var(--color-crimson);
      }
    }
  }

  ${OutsideDropdown} {
    margin-left: var(--space-s);
    text-decoration: none;
    font-size: var(--font-size-xs);
    font-family: var(--font-sans);
    transition: color 0.2s ease-in-out;

    span {
      color: var(--color-gray-800);
    }

    :hover {
      span {
        color: var(--color-crimson);
      }
    }
  }

  @media screen and (max-width: 550px) {
    display: none;
  };
`;



export const StyledNavbar = styled( motion.nav )`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: var(--space-s) var(--space-l);
`;


export const StyledChevronDownIcon = styled( ChevronDownIcon )`
  vertical-align: middle;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
  transform 0.8s ease-in-out;
  color: var(--color-gray-600);
  margin-left: var(--space-3xs);
  position: relative;
  top: 0;
`;


export const SearchBarWrapper = styled.form`
  label {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input {
    border: 1px solid #ccc;
    padding: var(--space-3xs) var(--space-xs);
    border-radius: 3rem;
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
    width: 40px;
    height: 40px;
    background-color: var(--color-cream);
    transition: all 0.3s ease;

    :focus {
      width: 400px;
    }
  }
`;



export const HitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 450px;
  max-width: 450px;
  overflow: scroll;
  position: absolute;
  top: 4rem;
  left: 0;
  background-color: var(--color-light-cream);
`;



export const StyledPopoverButton = styled( Popover.Button )`
  padding: 0;

  &:hover {
    ${StyledChevronDownIcon} {
      color: var(--color-bright-crimson);
      transform: rotateY(180deg);
      cursor: pointer;
      background-color: var(--color-gray-100);
      border-radius: 4px;
    }
  }
`;


export const Dropdown = styled( motion.div )`
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
  background: var(--color-cream);
  margin-left: 0.4rem;
  border: 1px solid var(--color-tinted-cream);
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-lg);
  z-index: 1;
`;



/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #3b4fb6;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${( props ) => props.theme.breakpoints.md} {
    padding: 0;
  }
`

export const NavProductsIcon = styled( IoIosArrowDropdown )`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${( { isOpen } ) => ( isOpen ? '1' : '.75' )};
  transform: ${( { isOpen } ) => ( isOpen ? 'scaleY(-1)' : 'scaleY(1)' )};

  &:hover {
    opacity: 1;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`


// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: rgba(0, 0, 0, 0.75);
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #8d9ab4;
    transform: scale(1.2);
    cursor: pointer;

  }
`
