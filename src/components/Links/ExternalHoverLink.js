import styled from "styled-components";



export const ExternalHoverLink = styled.a`
  position: absolute;
  top: 35%;
  left: ${( props ) => ( props.small ? "10%" : "18%" )};
  transform-origin: center;
  z-index: 1;
  font-family: var(--font-sans);
  background: white;
  color: var(--color-gray-800);
  padding: var(--space-3xs) var(--space-2xs);
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-md);
  opacity: 0%;
  transition: opacity 0.3s ease-in-out;
`;
