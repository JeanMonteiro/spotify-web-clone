import React from "react";
import { Container, SideItem, SideItemText, StyledLogo } from "./styles";

import { ReactComponent as LibraryIcon } from "src/assets/library.svg";
import { ReactComponent as SearchIcon } from "src/assets/search.svg";
import { ReactComponent as HomeIcon } from "src/assets/home.svg";

export default function Sidebar() {
  return (
    <Container>
      <StyledLogo />
      <SideItem>
        <HomeIcon />
        <SideItemText>Home</SideItemText>
      </SideItem>

      <SideItem>
        <SearchIcon />
        <SideItemText>Search</SideItemText>
      </SideItem>

      <SideItem>
        <LibraryIcon />
        <SideItemText>Your Library</SideItemText>
      </SideItem>
    </Container>
  );
}
