import EvergreenIcon from "../../components/Icons/EvergreenIcon";
import { ExternalHoverLink } from "../../components/Links/ExternalHoverLink.js";
import { HoverLink } from "../../styles/LinkStyledComponents.js";
import { ProjectImageWrapper, ProjectMetadataContainer, StyledProjectCard } from "../../styles/StyledCardComponents/ProjectStyled.js";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";



export default function ProjectCard( { slug, cover, title, date, topics } ) {
		function formattedDate( date ) {
				return new Date( date ).toLocaleDateString( "en", {
						year : "numeric",
						month: "long",
				} );
		}


		return (
				<HoverLink
						style = {{ cursor: "pointer" }}
						href = {`/${slug}`}
						target = "_blank"
						rel = "noopener noreferrer"
				>
						<a >
								<StyledProjectCard >
										<ExternalHoverLink >
												View further details{" "}
												<ArrowTopRightOnSquareIcon
														width = "18"
														height = "18"
														style = {{ position: "relative", top: "3px" }}
												/>
										</ExternalHoverLink >

										<ProjectImageWrapper >
												<Image
														src = {cover}
														alt = {title}
														width = {300}
														height = {225}
												/>
										</ProjectImageWrapper >
										<ProjectMetadataContainer >
												<h3 >{title}</h3 >
												<div className = "metadata" >
														<span >{formattedDate( date )}</span >
														<EvergreenIcon width = "14" height = "14" />
														<span >{topics}</span >
												</div >
										</ProjectMetadataContainer >
								</StyledProjectCard >
						</a >
				</HoverLink >

		);
}
