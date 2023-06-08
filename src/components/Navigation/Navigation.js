/**
	* @Author: Michael Metzger
	* @cite: Maggie Appleton <https://github.com/MaggieAppleton>
	*/


import Link from 'next/link'
import React, { useEffect } from 'react'
import { TiChartPie } from 'react-icons/ti'
// import SearchBarAndResults from "../Search/SearchBarAndResults.js";
import MainNavLinks from "./MainNavLinks.js";
import MobileMenu from "./MobileMenu.js";
import { RightHandSide, StyledNavbar } from './NavigationStyles.js'



export default function Navigation() {
		const [ searchState, setSearchState ] = React.useState( { query: {} } );
		const [ searchResults, setSearchResults ] = React.useState( [] );


		useEffect( () => {
				// If there is no search query, return early and reset the results
				if ( !searchState.query ) {
						setSearchResults( [] );
						return;
				}

				// Otherwise, search for results
				const search = async () => {
						try {
								const res = await fetch(
										// `/api/search?q=${searchState.query}`
								);

								const searchResults = await res.json();
								setSearchResults( searchResults );
						} catch (error) {
								console.error( error );
						}
				};

				search();
		}, [ searchState.query ] );


		return (
				<StyledNavbar
						initial = {{ opacity: 0 }}
						animate = {{ opacity: 1 }}
						transition = {{ duration: 1, delay: 0.1 }}
				>
						<Link href = "/" >
								<a aria-label = "Home" style = {{ display: 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)' }} >
										<TiChartPie size = "3em" />
										<span className = "" >Michael Metzger</span >
								</a >
						</Link >
						<RightHandSide >
								{/* <SearchBarAndResults searchResults = {[]} searchState = {{ query: {} }} /> */}
								<MainNavLinks />
						</RightHandSide >
						<MobileMenu />
				</StyledNavbar >
		);

}

