import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import useStyles from "./styles";
import companies from "../../data/companies";
import CompaniesSearchBar from "../../components/SearchBars/CompaniesSearchBar/CompaniesSearchBar";

const Wishlist = () => {
  const [data, setData] = useState(companies);
  const [autocompleteData, setAutocompleteData] = useState([]);
  const [autocompleteInput, setAutocompleteInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const companyNames = [];
    for (const company of data) {
      companyNames.push(company.name);
    }
    setAutocompleteData(companyNames.sort((a, b) => a.localeCompare(b)));
  }, []);

  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Box marginY={5} paddingX={5}>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            Can't find your dream company in the Upcoming Events?
          </Typography>
          <Typography
            variant="h4"
            align="center"
            style={{ fontWeight: "bold" }}
          >
            Wish a company!
          </Typography>
        </Box>
        <Box className={classes.filterBox}>
          <CompaniesSearchBar
            autocompleteData={autocompleteData}
            autocompleteInput={autocompleteInput}
            setAutocompleteInput={setAutocompleteInput}
          />
        </Box>
      </Grid>
    </>
  );
};

export default Wishlist;
