import React from "react";
import { Typography, Divider } from "@material-ui/core";
import "./styles.css";

export class MainMenu extends React.Component {
  render() {
    return (
      <div class="blog-post">
        <Typography variant="h2">Blog post</Typography>
        <Divider />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    );
  }
}

export default MainMenu;
