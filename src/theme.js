import { createMuiTheme } from "@material-ui/core/styles";
import { red, yellow, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: yellow
  },
  status: {
    danger: red
  }
});

export default theme;
