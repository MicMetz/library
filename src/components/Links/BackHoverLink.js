import { LinkContainer, StyledLink } from "../../styles/LinkStyledComponents.js";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";



export default function BackHoverLink( { href, children } ) {
		return (
				<Link href = {href} >
						<LinkContainer >
								<ArrowLeftIcon width = "16" height = "16" />
								<StyledLink >{children}</StyledLink >
						</LinkContainer >
				</Link >
		);
}
