import { StyledLayout } from "../../styles/StyledComponents.js";



export function Layout( { children, type } ) {
		return (
				<StyledLayout >
						{children}
				</StyledLayout >
		)
}
