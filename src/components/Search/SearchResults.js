/**
	* @fileoverview SearchResults component
	* @module components/Search/SearchResults
	* @see {@link https://www.algolia.com/doc/api-reference/widgets/hits/react/}
	* @see {@link https://www.algolia.com/doc/api-reference/widgets/connect-state-results/react/}
	*/

import { HitsContainer } from "../Navigation/NavigationStyles.js";
import { connectStateResults, Highlight } from "react-instantsearch-dom";



function SearchResults( { searchState, searchResults } ) {
		const validQuery = searchState.query?.length >= 3;

		return (
				<HitsContainer >
						{searchResults?.hits.length === 0 && validQuery && (
								<p >Sorry, I haven't written anything on "{searchState.query}"</p >
						)}
						{searchResults?.hits.length > 0 && validQuery && (
								<div >
										{searchResults.hits.map( ( hit ) => (
												<>
														<a href = {hit.slug} key = {hit.objectID} >
																<p >
																		<Highlight hit = {hit} attribute = "title" tagName = "mark" />
																</p >
														</a >
														<p >
																<Highlight hit = {hit} attribute = "description" tagName = "mark" />
														</p >
												</>
										) )}
								</div >
						)}
				</HitsContainer >
		);
}


export default connectStateResults( SearchResults );
