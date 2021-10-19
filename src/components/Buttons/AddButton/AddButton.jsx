import React, { useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { wishlistActionCreators } from "../../../state/action-creators";
import AddIcon from "@mui/icons-material/Add";
import { Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

// Notification alert
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddButton = () => {
  // Redux
  const dispatch = useDispatch();
  const { addCompany } = bindActionCreators(wishlistActionCreators, dispatch);
  const companiesState = useSelector(
    (state) => state.wishlistReducer.companies
  );
  const searchParameterState = useSelector(
    (state) => state.wishlistReducer.searchParameter
  );

  // State and onClick handler for notification
  const [notificationSeverity, setNotificationSeverity] = useState("");
  const alreadyAddedText = "This company is already in the wish list";
  const justAddedText = "Company just added to the list";
  const textTooLong = "Company name is too long";
  const textTooShort = "Company name is too short";
  const [notificationText, setNotificationText] = useState("");
  const [openState, setOpenState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = openState;
  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenState({ ...openState, open: false });
  };

  // Handle add company to companies array
  const handleAddCompany = () => {
    const checkIfOnlySpaces = (string) => {
      return string.replace(/\s/g, "").length;
    };

    const removeExtraSpaces = (string) => {
      return string.replace(/\s\s+/g, " ").trim();
    };

    if (!checkIfOnlySpaces(searchParameterState)) return null;

    if (searchParameterState.length < 3) {
      // Notification
      setNotificationSeverity("error");
      setNotificationText(textTooShort);
      return setOpenState({
        ...openState,
        open: true,
      });
    } else if (searchParameterState.length > 45) {
      // Notification
      setNotificationSeverity("error");
      setNotificationText(textTooLong);
      return setOpenState({
        ...openState,
        open: true,
      });
    }

    for (const company of companiesState) {
      if (
        company.name.toLowerCase() ===
        removeExtraSpaces(searchParameterState.toLowerCase())
      ) {
        // Notification
        setNotificationSeverity("error");
        setNotificationText(alreadyAddedText);
        return setOpenState({
          ...openState,
          open: true,
        });
      }
    }

    addCompany({
      id: companiesState.length,
      name: removeExtraSpaces(searchParameterState),
      upvotes: 0,
      upvoted: true,
    });
    // Notification
    setNotificationSeverity("success");
    setNotificationText(justAddedText);
    setOpenState({ ...openState, open: true });
  };

  return (
    <>
      <Button
        onClick={handleAddCompany}
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
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      >
        <Alert
          severity={notificationSeverity}
          sx={{ width: "100%" }}
          onClose={handleCloseNotification}
        >
          {notificationText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddButton;
