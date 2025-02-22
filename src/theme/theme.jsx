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
        bgColor: {
          main: '#1B1A27'
        },
        background: {
          default: '#12121a',
          paper: '#1B1A27',
        },
      },
};

const theme = createTheme(darkPallete);
export default theme;

