import { createMuiTheme } from '@material-ui/core/styles';

const tranceparent = "#ffffff80";
const reanceparentWhite = "#ffffff";
const darkText = "#000000"

export default createMuiTheme({
  palatte: {
    transparent: {
      main: `${tranceparent}`
    },
    light: {
      main: `${reanceparentWhite}`
    },
    dark: {
      main: `${darkText}`
    },
    transparentWhite: {
      main: "rgba(255,255,255,0.5)"
    }
  }
});
