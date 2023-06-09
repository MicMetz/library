import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import LaborFilters from "./ProjectFilters.js";
import LaborHits from "./ProjectHits.js";



const searchClient = algoliasearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
		process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export const LaborFiltersAndHits = ( { allPostData } ) => {
		const sortedPosts = allPostData.sort( ( a, b ) => {
				return new Date( b.updated ) - new Date( a.updated );
		} );

		return (
				<InstantSearch searchClient = {searchClient} indexName = "Labor-posts" >
						<Configure hitsPerPage = {200} />
						<LaborFilters />
						<LaborHits allPostData = {allPostData} />
				</InstantSearch >
		);
};
