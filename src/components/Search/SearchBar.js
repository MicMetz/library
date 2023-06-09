/**
	* @fileoverview This file exports the SearchBar component which is used to search for products.
	* @module components/Search/SearchBar
	* @see {@link https://www.algolia.com/doc/api-reference/widgets/search-box/react/}
	* @see {@link https://www.algolia.com/doc/api-reference/widgets/connect-search-box/react/}
	* @see {@link https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/}
	*
	*/


import { SearchBarWrapper } from "../../components/Navigation/NavigationStyles.js";
import { connectSearchBox } from "react-instantsearch-dom";



const SearchBar = ( { refine } ) => {
		return (
				<SearchBarWrapper role = "search" >
						<label htmlFor = "algolia_search" >Search</label >
						<input
								id = "algolia_search"
								type = "search"
								placeholder = "Search"
								onChange = {( e ) => refine( e.currentTarget.value )}
						/>
				</SearchBarWrapper >
		);
};

export default connectSearchBox( SearchBar );

