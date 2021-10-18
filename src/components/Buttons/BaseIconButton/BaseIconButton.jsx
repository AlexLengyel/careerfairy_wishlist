import React from "react";
import { Button } from "@mui/material";

const BaseIconButton = ({ widthAndHeight }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "12px",
        padding: "0px",
        maxHeight: widthAndHeight,
        minHeight: widthAndHeight,
        maxWidth: widthAndHeight,
        minWidth: widthAndHeight,
      }}
    />
  );
};

export default BaseIconButton;
