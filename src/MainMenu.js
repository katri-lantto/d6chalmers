import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuItem";

import "./styles.css";

export class MainMenu extends React.Component {
  render() {
    return (
      <MenuList className="horizontal-menu">
        <MenuItem>Blog</MenuItem>
        <MenuItem>Om oss</MenuItem>
        <MenuItem>Event</MenuItem>
        <MenuItem>Bilder</MenuItem>
        <MenuItem>PR arkiv</MenuItem>
        <MenuItem>Om sidan</MenuItem>
      </MenuList>
    );
  }
}

export default MainMenu;
