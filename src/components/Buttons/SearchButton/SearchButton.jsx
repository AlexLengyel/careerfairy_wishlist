import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "12px",
        padding: "0px",
        maxHeight: "40px",
        minHeight: "40px",
        maxWidth: "40px",
        minWidth: "40px",
      }}
    >
      <SearchIcon sx={{ color: "white" }} fontSize="medium" />
    </Button>
  );
};

export default SearchButton;
