import styled from "styled-components";



const handleSize = ( size ) => {
		switch (size) {
				case "xs":
						return "var(--space-xs)";
				case "small":
						return "var(--space-s)";
				case "medium":
						return "var(--space-m)";
				case "large":
						return "var(--space-l)";
				case "xlarge":
						return "var(--space-xl)";
				case "2xlarge":
						return "var(--space-2xl)";
				case "3xlarge":
						return "var(--space-3xl)";
				default:
						return "var(--space-m)";
		}
};

export const Spacer = styled.div`
  height: ${( { size } ) => handleSize( size )};
`;
