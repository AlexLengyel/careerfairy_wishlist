import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

import NavBar from "./components/NavBar/NavBar";
import Wishlist from "./pages/Wishlist/Wishlist";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Wishlist />
    </ThemeProvider>
  );
};

export default App;
