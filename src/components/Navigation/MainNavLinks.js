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



function LibraryPopoverLinks() {
  return (
    <Popover style = {{ position: "relative" }} >
      <Link href = "/Library" >
        <HoverLink >
          <span >Library</span >
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
          < Link href = "/Essays" >
            <DropdownLink >Essays</DropdownLink >
          </Link >
          <Link href = "/Articles" >
            <DropdownLink >Articles</DropdownLink >
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
        <LibraryPopoverLinks />
      </AnimatePresence >
      <div className = "outside-dropdown" >
        <UnderlineHoverLink href = "/book_wall" >Books</UnderlineHoverLink >
        <UnderlineHoverLink href = "/article_wall" >Articles</UnderlineHoverLink >
      </div >
    </MainNav >
  );
}


