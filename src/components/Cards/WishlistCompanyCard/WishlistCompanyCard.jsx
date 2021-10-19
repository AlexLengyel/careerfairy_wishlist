import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import UpvoteButton from "../../Buttons/UpvoteButton/UpvoteButton";

const WishlistCompanyCard = ({ company }) => {
  return (
    <Card
      elevation={2}
      sx={{
        minWidth: "200px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: "5%",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "75px",
          paddingX: "5px",
          borderBottom: "2px solid black",
        }}
      >
        <Typography align="center" sx={{ fontWeight: "bold" }}>
          {company.name}
        </Typography>
      </Grid>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        sx={{ height: "45px", paddingBottom: "1px" }}
      >
        <UpvoteButton company={company} />
        <Typography variant="subtitle2" align="center" sx={{ marginX: "auto" }}>
          Upvoted {company.upvoted ? company.upvotes + 1 : company.upvotes}{" "}
          times
        </Typography>
      </Grid>
    </Card>
  );
};

export default WishlistCompanyCard;
