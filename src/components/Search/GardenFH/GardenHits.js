import EssayCard from "../../Cards/EssayCard.js";
import NoteCard from "../../Cards/NoteCard.js";
import { connectInfiniteHits } from "react-instantsearch-dom";
import MasonryGrid from "../../Layouts/MasonryGrid.js";



function GardenHits( { hits, allPostData } ) {
		const hitLength = hits?.length;
		const sortedPosts = allPostData.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );
		const filteredGardenHits = hitLength > 0 ? hits : sortedPosts;

		return (
				<MasonryGrid >
						{filteredGardenHits.map( ( post, i ) => {
								if ( post.type === "essay" ) {
										return (
												<EssayCard
														key = {i}
														id = {post.slug}
														slug = {post.slug}
														cover = {post.cover}
														title = {post.title}
														growthStage = {post.growthStage}
														date = {post.updated}
												/>
										);
								} else if ( post.type === "note" ) {
										return (
												<NoteCard
														key = {i}
														id = {post.slug}
														slug = {post.slug}
														title = {post.title}
														growthStage = {post.growthStage}
														date = {post.updated}
												/>
										);
								} else if ( post.type === "pattern" ) {
										return (
												<IdeaCard
														key = {i}
														id = {post.slug}
														slug = {post.slug}
														title = {post.title}
														growthStage = {post.growthStage}
														date = {post.updated}
												/>
										);
								}
						} )}
				</MasonryGrid >
		);
}


export default connectInfiniteHits( GardenHits );
