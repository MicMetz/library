import GrowthIcon from "../../components/Icons/GrowthIcon";
import { EssayImageWrapper, EssayMetadataContainer, StyledEssayCard } from "../../styles/StyledCardComponents/EssayStyled.js";
import Image from "next/image";
import Link from "next/link";
import { RelativeDate } from "../MISC/DatesFormat.js";



export default function EssayCard( { slug, cover, title, growthStage, date, variants, id } ) {
		return (
				<Link key = {id} as = {`/${slug}`} href = {`/${slug}`} >
						<a >
								<StyledEssayCard variants = {variants} >
										{cover && (
												<EssayImageWrapper >
														<Image src = {cover} alt = {title} width = {400} height = {400} />
												</EssayImageWrapper >
										)}
										<h3 >{title}</h3 >
										<EssayMetadataContainer >
												{growthStage && <span >{growthStage} Essay</span >}
												{growthStage && <GrowthIcon size = "15" growthStage = {growthStage} />}
												<span >
														<RelativeDate postDate = {date} />
												</span >
										</EssayMetadataContainer >
								</StyledEssayCard >
						</a >
				</Link >
		);
}

