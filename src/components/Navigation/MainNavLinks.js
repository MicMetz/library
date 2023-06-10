/**
 * @Author: Maggie Appleton <https://github.com/MaggieAppleton>
 * @Author: Michael Metzger
 */


import { Popover } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { DropdownLink, HoverLink } from "../../styles/LinkStyledComponents.js";
import UnderlineHoverLink from "../Links/UnderlineHoverLink";
import { Dropdown, MainNav, StyledChevronDownIcon, StyledPopoverButton } from "../Navigation/NavigationStyles.js";



function GardenPopoverLinks() {
  return (
    <Popover style = {{ position: "relative" }} >
      <Link href = "https://micmetz.github.io/Garden" >
        <HoverLink >
          <span >Digital Garden</span >
        </HoverLink >
      </Link >
      <StyledPopoverButton >
        <StyledChevronDownIcon width = "24" height = "24" />
      </StyledPopoverButton >

      <Popover.Panel >
        <Dropdown
          initial = {{
            opacity        : 0,
            rotateX        : "90deg",
            transformOrigin: "top",
          }}
          animate = {{ opacity: 1, rotateX: "0deg" }}
          exit = {{ opacity: 0, rotateX: "90deg" }}
          transition = {{ duration: 0.6, ease: "easeInOut" }}
          style = {{ position: "absolute", zIndex: "10" }}
          key = "dropdown"
        >
          < Link href = "https://micmetz.github.io/Essays" >
            <DropdownLink >Essays</DropdownLink >
          </Link >
          <Link href = "https://micmetz.github.io/Notes" >
            <DropdownLink >Notes</DropdownLink >
          </Link >
          <Link href = "/" >
            <DropdownLink >Library</DropdownLink >
          </Link >
        </Dropdown >
      </Popover.Panel >
    </Popover >
  );
}


export default function MainNavLinks() {
  return (
    <MainNav >
      <AnimatePresence >
        <GardenPopoverLinks />
      </AnimatePresence >
      <div className = "outside-dropdown" >
        <UnderlineHoverLink href = "/library" >Home</UnderlineHoverLink >
        <UnderlineHoverLink href = "/Books" >Books</UnderlineHoverLink >
        <UnderlineHoverLink href = "/Articles" >Articles</UnderlineHoverLink >
      </div >
    </MainNav >
  );
}


