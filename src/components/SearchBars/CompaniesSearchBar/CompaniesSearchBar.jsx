import React, { useState, useEffect } from "react";
import { Autocomplete, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import StyledTextField from "./styles";
import { wishlistActionCreators } from "../../../state/action-creators";
import AddButton from "../../Buttons/AddButton/AddButton";
import OrderButton from "../../Buttons/OrderButton/OrderButton";
import globalStyles from "../../../styles/globalStyles";

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

  // State for only the company names in alphabetical order to display them in the autocomplete list
  const [companyNames, setCompanyNames] = useState([]);
  // State for the search bar input value
  const [autocompleteInput, setAutocompleteInput] = useState("");

  // Adding the search input value to the redux store
  useEffect(() => {
    setSearchParameter(autocompleteInput);
  }, [autocompleteInput]); // eslint-disable-line

  // Adding company names to the companyNames state in alphabetical order
  useEffect(() => {
    const unsortedCompanyNames = [];
    for (const company of companiesState) {
      unsortedCompanyNames.push(company.name);
    }
    return setCompanyNames(
      unsortedCompanyNames.sort((a, b) => a.localeCompare(b))
    );
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
                style: {
                  color: globalStyles.color.turquoise,
                  fontWeight: "bold",
                },
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
        <OrderButton />
      </Grid>
    </Grid>
  );
};

export default CompaniesSearchBar;
