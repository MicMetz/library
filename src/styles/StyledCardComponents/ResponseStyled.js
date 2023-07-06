import { motion } from "framer-motion";
import styled from "styled-components";



export const ResponseMetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: var(--space-xs);
  margin-top: var(--space-2xs);
  font-family: var(--font-sans);
  font-size: calc(var(--font-size-xs) / 1.08);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;

  svg {
    margin: 0 0.4rem;
  }
`;

export const StyledResponseCard = styled( motion.div )`
  display: flex;
  flex-direction: row;
  padding: var(--space-xs);
  margin: 0 var(--space-xs) 0 0;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-cream);
  transition: all 0.3s ease-in-out;
  align-items: start;
  cursor: pointer;

  h3 {
    color: var(--color-gray-800);
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin-left: var(--space-xs);
    transition: all 0.3s ease-in-out;
  }

  svg {
    position: relative;
    top: 1px;
    flex-shrink: 0;
  }

  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    background: var(--color-light-cream);
    box-shadow: var(--box-shadow-sm);
    border: 1px solid var(--color-tinted-cream);

    h3 {
      color: var(--color-crimson);
    }
  }
`;



