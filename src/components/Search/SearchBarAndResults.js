/**
	* @fileoverview  Defines a component that contains the search bar and search results.
	* @module components/Search/SearchBarAndResults
	* @see {@link https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/}
	*/


import algoliasearch from "algoliasearch/lite";
import { useEffect, useState } from "react";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";



const searchClient = algoliasearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
		process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function SearchBarAndResults( { searchState, searchResults } ) {
		const validQuery = searchState.query?.length >= 3;
		const [ query, setQuery ] = useState( "" );
		const [ results, setResults ] = useState( [] );

		console.log( "SearchBarAndResults() searchState:", searchState );


		useEffect( () => {
				if ( searchState.query ) {
						setQuery( searchState.query );
				}
		}, [ searchState.query ] );


		useEffect( () => {
				if ( searchResults.hits ) {
						setResults( searchResults.hits );
				}
		}, [ searchResults.hits ] );

		return (
				<InstantSearch searchClient = {searchClient} indexName = "posts" searchState = {searchState} >
						<Configure hitsPerPage = {10} />
						<SearchBar />
						<SearchResults searchState = {searchState} searchResults = {searchResults} />
				</InstantSearch >
		);

}


