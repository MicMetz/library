import styled from "styled-components";
import { ExternalHoverLink } from "../../components/Links/ExternalHoverLink.js";



export const BookImageWrapper = styled.div`
  display: grid;
  place-items: baseline;
  max-width: 300px;
  max-height: 450px;
`;



export const StyledBookCard = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  margin: 1em 1em 1em 0;
  padding: ${( props ) => props.small ? "0 0 var(--space-xs) 0" : "0 var(--space-3xs) var(--space-l) var(--space-3xs)"};

  img {
    transition: all 0.3s ease-in-out;
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);
  }

  div {
    transition: all 0.3s ease-in-out;
  }

  div p {
    transition: all 0.3s ease-in-out;
    margin: var(--space-2xs) 0 var(--space-3xs) 0;
    line-height: var(--leading-base);
    color: var(--color-black);
  }

  &:hover {
    img {
      box-shadow: var(--box-shadow-lg);
      transform: scale3d(1.02, 1.02, 1.02);
      opacity: 20%;
    }

    p {
      color: var(--color-crimson);
    }

    div {
      transform: translateY(4px);
    }

    ${ExternalHoverLink} {
      opacity: 100%;
    }
  }
`;
