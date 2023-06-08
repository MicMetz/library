import { LinkContainer, StyledLink } from "../../styles/LinkStyledComponents.js";



export default function UnderlineHoverLink( { href, children } ) {
		return (
				<LinkContainer >
						<StyledLink href = {href} >
								<span >{children}</span >
						</StyledLink >
				</LinkContainer >
		);
}
