import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={2}>
      <Toolbar style={{ backgroundColor: "white" }}>
        <img
          style={{ width: "150px" }}
          src="https://www.careerfairy.io/logo_teal.svg"
          alt="CareerFairy's Logo"
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
