import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import DefaultLayout from '../components/Layouts/DefaultLayout.js'
import Header from "../components/Layouts/Header.js";
import {
		ContentBlock,
		DefaultBlockQuote,
		DefaultBody,
		DefaultMain,
		DefaultQuoteText,
		SectionTitle
} from '../styles/StyledComponents.js'
import {Essays} from '../../posts/data/Essays.js'
import Footer from '../components/Layouts/Footer.js';
import { Sidebar } from '../components/Sidebar';
import { motion } from 'framer-motion';



export default function TheWall( forwardRef, open, toggle ) {
		const [ activeFeature, setActiveFeature ]   = useState()
		const [ scrollPosition, setScrollPosition ] = useState()
		const navRef                                = useRef( { open, toggle } )
		const ref                                   = useRef( forwardRef )

		return (
				<DefaultLayout >
						<Header title={"Articles & Essays"} />
						<DefaultBody >
								<Sidebar header = {""} chapters = {[]} open = {open} toggle = {toggle} forwardRef = {ref} />
								<DefaultMain >

										<SectionTitle main >Writings</SectionTitle >

								</DefaultMain >
						</DefaultBody >
				</DefaultLayout >
		)
}



const transition = ( { duration, ease } ) => {
		return {
				duration: duration || 1.5,
				ease    : ease || [ 0.87, 0.1, -0.13, 1 ]
		}
}
