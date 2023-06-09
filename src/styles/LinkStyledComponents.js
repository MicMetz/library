// noinspection CssOverwrittenProperties,CssReplaceWithShorthandSafely

import styled from "styled-components";



export const ReadmoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 400;

  svg {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    position: relative;
    top: 1px;
    margin-left: var(--space-3xs);
  }

  &:hover {
    transition: color 0.3s ease-in-out, margin-left 0.2s ease-in-out;
    color: var(--color-bright-crimson);
    cursor: pointer;

    svg {
      margin-left: var(--space-2xs);
      color: var(--color-sea-blue);
    }
  }
`;


export const DropdownLink = styled.span`
  margin: 0 !important;
  color: var(--color-gray-800);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  border-bottom: 1px solid var(--color-tinted-cream);
  border-left: 2px solid var(--color-cream);
  padding: var(--space-2xs) var(--space-l) var(--space-2xs) var(--space-xs);
  transition: all 0.3s ease-in-out;
  margin-left: var(--space-s);
  text-decoration: none;
  font-size: var(--font-size-xs);
  font-family: var(--font-sans);
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  span {
    color: var(--color-gray-800);
  }

  :hover {
    span {
      color: var(--color-crimson);
    }
  }

  &:hover {
    background: var(--color-light-cream);
    color: var(--color-crimson);
  }
`;


export const LinkContainer = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 3px;
  top: 1px;
`;



export const HoverLink = styled.span`
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

  cursor: pointer;
  position: relative;
  top: 1px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  padding-bottom: 0.25rem;

  &:focus {
    outline: 2px solid var(--color-sea-blue);
    //outline: 2px solid var(--color-primary);
    border-radius: 2px;
  }

  &::before {
    content: "";
    transform-origin: 50% 100%;
    background: var(--color-sea-blue);
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    position: absolute;
    width: 100%;
    height: 1px;
    top: 95%;
    left: 0;
    pointer-events: none;
    clip-path: polygon(0% 0%,
    0% 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 100%,
    100% 100%,
    100% 0%);
  }

  &:hover::before {
    transform: translate3d(0, 2px, 0) scale3d(1, 2, 1);
    clip-path: polygon(0% 0%,
    0% 100%,
    100% 100%,
    50% 0,
    50% 0,
    50% 100%,
    50% 100%,
    0 100%,
    100% 100%,
    100% 0%);
  }
`;


export const NavLink = styled.a`
  font-size: 1.5rem;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);
  transition: 0.4s ease;
  padding-right: 5rem;
  white-space: nowrap;


  &:hover {
    color: #3b4fb6;
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
    transition: 0.4s ease;
  }

  @media ${( props ) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`


export const StyledLink = styled.a`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  padding-bottom: 0.25rem;

  &:focus {
    outline: 2px solid darkblue;
    border-radius: 2px;
  }

  &::before {
    content: "";
    transform-origin: 50% 100%;
    background: var(--color-sea-blue);
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    position: absolute;
    width: 100%;
    height: 1px;
    top: 95%;
    left: 0;
    pointer-events: none;
    clip-path: polygon(0% 0%,
    0% 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 100%,
    100% 100%,
    100% 0%);
  }

  &:hover::before {
    transform: translate3d(0, 2px, 0) scale3d(1, 2, 1);
    clip-path: polygon(0% 0%,
    0% 100%,
    100% 100%,
    50% 0,
    50% 0,
    50% 100%,
    50% 100%,
    0 100%,
    100% 100%,
    100% 0%);
  }

  span {
    display: inline-block;
    transition: all 0.5s cubic-bezier(0.2, 1, 0.8, 1);
    color: var(--color-bright-crimson);
  }

  &:hover span {
    transform: translate3d(0, -2px, 0);
    color: var(--color-crimson);
  }
`;
