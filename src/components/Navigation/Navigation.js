/**
 * @Author: Michael Metzger
 * @cite: Maggie Appleton <https://github.com/MaggieAppleton>
 */


import Link from 'next/link'
import React, { useEffect } from 'react'
import SearchBarAndResults from "../Search/SearchBarAndResults.js";
// import SearchBarAndResults from "../Search/SearchBarAndResults.js";
import MainNavLinks from "./MainNavLinks.js";
import MobileMenu from "./MobileMenu.js";
import { RightHandSide, StyledNavbar } from './NavigationStyles.js'



export default function Navigation() {
  const [ searchState, setSearchState ]     = React.useState( { query: {} } );
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
          `/api/search?q=${searchState.query}`
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
      {/*
       <a onClick = {() => {
       if (window.location.href.includes( "localhost" )) { return "http://localhost:3000" }
       else {
       if (window.location.href.includes( "library" )) { return "https://micmetz.github.io/Library" }
       else { return "https://micmetz.github.io" }
       }
       }} >
       */}
      <Link href = "https://micmetz.github.io" >
        <a aria-label = "Home" style = {{ display: 'flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.75)' }} >
          <img src = "/icons/logo-hook.svg" width = "24" height = "20" xmlns = "http://www.w3.org/2000/svg" />
          <span className = "" >Michael Metzger</span >
        </a >
      </Link >
      <RightHandSide >
        <SearchBarAndResults searchResults = {[]} searchState = {{ query: {} }} />
        <MainNavLinks />
      </RightHandSide >
      <MobileMenu />
    </StyledNavbar >
  );

}

