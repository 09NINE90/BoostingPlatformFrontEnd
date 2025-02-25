import { createTheme } from "@mui/material";

const darkPallete = {
    palette: {
        mode: 'dark',
        primary: {
          main: '#2D2540',
        },
        secondary: {
          main: '#D08D4E',
        },
        background: {
          default: '#1B1A27',
          paper: '#272632',
        },
      },
};

const testPallete = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#9C27B0', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D08D4E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1B0F2B',
      paper: '#2E1E4D', 
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#BDBDBD',
    },
    divider: '#443D54',
  },
}


const theme = createTheme({
  ...testPallete,
  spacing: 4,
});
export default theme;

