import React from "react";
import { Paper, Button } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import MainMenu from "./MainMenu.js";
import BlogPost from "./BlogPost.js";
import "./styles.css";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Paper>
          <MainMenu />
          <Button variant="outlined"> This is a first button </Button>
          <BlogPost />
        </Paper>
      </div>
    </ThemeProvider>
  );
}
