import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00d2aa",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#202020",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
});

export default theme;
