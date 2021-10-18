import React from "react";
import { Button, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SortButton = ({ order }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{
        borderRadius: "12px",
        paddingY: "0px",
        paddingX: "5px",
        maxHeight: "40px",
        minHeight: "40px",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: "bold", color: "white", marginLeft: "5px" }}
      >
        SORT
      </Typography>
      {order ? (
        <ArrowDownwardIcon sx={{ color: "white" }} fontSize="medium" />
      ) : (
        <ArrowUpwardIcon sx={{ color: "white" }} fontSize="medium" />
      )}
    </Button>
  );
};

export default SortButton;
