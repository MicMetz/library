import { StyledLayout } from "../../styles/StyledComponents.js";
import DynamicPostsGrid from "./DynamicPostsGrid.js";



export function Layout( { children, type } ) {
  switch (type) {
    default: {
      return (
        <StyledLayout >
          {children}
        </StyledLayout >
      );
    }
    case 'default': {
      return (
        <StyledLayout >
          {children}
        </StyledLayout >
      );
    }
    case 'posts': {
      return (
        <DynamicPostsGrid >
          {children}
        </DynamicPostsGrid >
      );
    }
  }
}
