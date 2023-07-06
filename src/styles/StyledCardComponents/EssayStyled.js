import styled from "styled-components";



export const EssayImageWrapper = styled.div`
  display: grid;
  place-items: center;
  max-width: 450px;
  max-height: 450px;
`;

export const EssayMetadataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: calc(var(--font-size-xs) / 1.08);
    color: var(--color-gray-600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 400;
    margin-top: 2px;
  }

  svg {
    margin: 0 var(--space-2xs);
  }
`;

export const StyledEssayCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-tinted-cream);
  padding: var(--space-s);
  margin: 0 var(--space-2xs) var(--space-2xs) 0;
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow-sm);
  background: var(--color-light-cream);
  transition: all 0.3s ease-in-out;
  color: var(--color-gray-800);
  cursor: pointer;

  img {
    width: 100%;
  }

  h3 {
    transition: all 0.3s ease-in-out;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: var(--leading-snug);
    margin: var(--space-2xs) 0;
  }

  &:hover {
    box-shadow: var(--box-shadow-lg);
    transform: scale3d(1.02, 1.02, 1.02);

    h3 {
      color: var(--color-crimson);
    }
  }
`;
