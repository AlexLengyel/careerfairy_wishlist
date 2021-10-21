import React, { useState, forwardRef } from "react";
import { Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { wishlistActionCreators } from "../../../state/action-creators";

// Notification alert
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UpvoteButton = ({ company }) => {
  // Redux
  const dispatch = useDispatch();
  const { handleUpvote } = bindActionCreators(wishlistActionCreators, dispatch);

  // Notification
  const upvotedText = "Company is upvoted";
  const downvotedText = "Company is downvoted";
  // State for the notification text
  const [notificationText, setNotificationText] = useState("");
  // State for displaying the notification
  const [openState, setOpenState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = openState;
  // Closing the notification on click
  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    return setOpenState({ ...openState, open: false });
  };

  // Toggling the upvote value and triggering the notification
  const handleUpvoteCompany = () => {
    setNotificationText(!company.upvoted ? upvotedText : downvotedText);
    setOpenState({ ...openState, open: true });
    handleUpvote({ companyIndexAndId: company.id, upvoted: !company.upvoted });
  };

  return (
    <>
      <Button
        onClick={handleUpvoteCompany}
        variant="text"
        color={!company.upvoted ? "primary" : "secondary"}
        sx={{
          borderRadius: "12px",
          fontWeight: "bold",
        }}
      >
        UPVOTE
      </Button>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={handleCloseNotification}
        >
          {notificationText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UpvoteButton;
