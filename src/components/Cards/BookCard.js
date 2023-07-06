import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { ExternalHoverLink } from "../../components/Links/ExternalHoverLink.js";
import { HoverLink } from '../../styles/LinkStyledComponents.js';
import { BookImageWrapper, StyledBookCard } from "../../styles/StyledCardComponents/BookStyled.js";



export default function BookCard( { small, cover, title, subtitle, author, link } ) {
  return (
    <HoverLink
      style = {{ cursor: "pointer" }}
      href = {link}
      target = "_blank"
      rel = "noopener noreferrer"
    >
      <StyledBookCard small = {small}>
        <ExternalHoverLink small = {small}>
          View further details{" "}
          <ArrowTopRightOnSquareIcon
            width = "18"
            height = "18"
            style = {{ position: "relative", top: "3px" }}
          />
        </ExternalHoverLink >
        {cover && (
          <BookImageWrapper >
            <Image src = {cover} alt = {title} width = {230} height = {345}/>
          </BookImageWrapper >
        )}
        <div >
          <p >
            {title}
            {!small && subtitle && `: ${subtitle}`}
          </p >
          <span className = "metadata">{author}</span >
        </div >
      </StyledBookCard >
    </HoverLink >
  );
}

