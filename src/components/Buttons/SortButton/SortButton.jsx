import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { wishlistActionCreators } from "../../../state/action-creators";
import { Button, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SortButton = () => {
  // Redux
  const dispatch = useDispatch();
  const { setDescendingOrder } = bindActionCreators(
    wishlistActionCreators,
    dispatch
  );
  const descendingOrderState = useSelector(
    (state) => state.wishlistReducer.descendingOrder
  );

  const handleOrderChange = () => {
    setDescendingOrder(!descendingOrderState);
  };

  return (
    <Button
      onClick={handleOrderChange}
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
        ORDER
      </Typography>
      {descendingOrderState ? (
        <ArrowDownwardIcon sx={{ color: "white" }} fontSize="medium" />
      ) : (
        <ArrowUpwardIcon sx={{ color: "white" }} fontSize="medium" />
      )}
    </Button>
  );
};

export default SortButton;
