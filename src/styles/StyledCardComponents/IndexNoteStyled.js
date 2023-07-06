import styled from "styled-components";



export const IndexNoteStyled = styled.div`
  display: flex;
  padding: var(--space-xs) 0 1.2rem;
  border-bottom: 1px solid var(--color-tinted-cream);
  transition: all 0.3s ease-in-out;

  svg {
    position: relative;
    top: 5px;
    flex-shrink: 0;
  }

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

  &:hover {
    border-bottom: 1px solid var(--color-sea-blue);

    h3 {
      color: var(--color-crimson);
    }

    transform: scale3d(1.02, 1.02, 1.02);
  }
`;
