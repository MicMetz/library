import styled from "styled-components";
import GrowthIcon from "../../components/Icons/GrowthIcon.js";
import { NoteMetadataContainer, StyledNoteCard } from "../../styles/StyledCardComponents/NoteStyled.js";
import Link from "next/link";
import { RelativeDate } from "../MISC/DatesFormat.js";




export default function NoteCard({ slug, title, growthStage, date, id }) {
		return (
				<Link key={id} as={`/${slug}`} href={`/${slug}`}>
						<a>
								<StyledNoteCard>
										{growthStage && <GrowthIcon size="24" growthStage={growthStage} />}
										<div>
												<h3>{title}</h3>
												<MetadataContainer>
														<span>{growthStage} Note</span>
														<svg width="6px" height="14px">
																<circle r="3" cx="3" cy="3" fill="var(--color-gray-400)" />
														</svg>
														<RelativeDate postDate={date} />
												</MetadataContainer>
										</div>
								</StyledNoteCard>
						</a>
				</Link>
		);
}




const MetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: var(--space-xs);
  margin-top: var(--space-2xs);
  font-family: var(--font-sans);
  font-size: calc(var(--font-size-xs) / 1.08);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
  svg {
    margin: 0 0.4rem;
  }
`;
