import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddButton = () => {
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
      <AddIcon sx={{ color: "white" }} fontSize="medium" />
    </Button>
  );
};

export default AddButton;
