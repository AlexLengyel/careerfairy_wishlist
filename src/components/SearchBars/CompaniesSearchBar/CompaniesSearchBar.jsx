import React, { useState, useEffect } from "react";
import { Autocomplete, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import StyledTextField from "./styles";
import { wishlistActionCreators } from "../../../state/action-creators";
import AddButton from "../../Buttons/AddButton/AddButton";
import SortButton from "../../Buttons/SortButton/SortButton";

const CompaniesSearchBar = () => {
  // Redux
  const dispatch = useDispatch();
  const { setSearchParameter } = bindActionCreators(
    wishlistActionCreators,
    dispatch
  );
  const companiesState = useSelector(
    (state) => state.wishlistReducer.companies
  );

  const [companyNames, setCompanyNames] = useState([]);
  const [autocompleteInput, setAutocompleteInput] = useState("");

  useEffect(() => {
    setSearchParameter(autocompleteInput);
  }, [autocompleteInput]); // eslint-disable-line

  useEffect(() => {
    const unsortedCompanyNames = [];
    for (const company of companiesState) {
      unsortedCompanyNames.push(company.name);
    }
    setCompanyNames(unsortedCompanyNames.sort((a, b) => a.localeCompare(b)));
  }, [companiesState]);

  return (
    <Grid container alignItems="center" align="center" spacing={1}>
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
        <Autocomplete
          id="company-autocomplete"
          fullWidth
          size="small"
          loadingText="Loading..."
          freeSolo={true}
          options={companyNames}
          inputValue={autocompleteInput}
          onInputChange={(event, newInputValue) =>
            setAutocompleteInput(newInputValue)
          }
          PaperComponent={({ children }) => (
            <Paper
              style={{
                color: "black",
                textAlign: "start",
              }}
            >
              {children}
            </Paper>
          )}
          ListboxProps={{
            style: {
              maxHeight: "160px",
            },
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label="Company's name"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#00d2aa", fontWeight: "bold" },
              }}
            />
          )}
        />
      </Grid>
      {/*
      <Grid item>
        <SearchButton />
      </Grid>
      */}
      <Grid item>
        <AddButton />
      </Grid>
      <Grid item style={{ marginLeft: "auto" }}>
        <SortButton />
      </Grid>
    </Grid>
  );
};

export default CompaniesSearchBar;
