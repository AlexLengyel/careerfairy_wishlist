import React from "react";
import { Autocomplete, Grid, Paper } from "@mui/material";
import StyledTextField from "../styles";
import AddButton from "../../Buttons/AddButton/AddButton";
import SearchButton from "../../Buttons/SearchButton/SearchButton";
import SortButton from "../../Buttons/SortButton/SortButton";

const CompaniesSearchBar = ({
  autocompleteData,
  autocompleteInput,
  setAutocompleteInput,
}) => {
  return (
    <Grid container alignItems="center" align="center" spacing={1}>
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
        <Autocomplete
          id="company-autocomplete"
          loadingText="Loading..."
          disablePortal
          fullWidth
          size="small"
          options={autocompleteData}
          inputValue={autocompleteInput}
          onInputChange={(event, newInputValue) =>
            setAutocompleteInput(newInputValue)
          }
          PaperComponent={({ children }) => (
            <Paper
              style={{
                //fontWeight: "bold",
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
      <Grid item>
        <SearchButton />
      </Grid>
      <Grid item>
        <AddButton />
      </Grid>
      <Grid item style={{ marginLeft: "auto" }}>
        <SortButton order={true} />
      </Grid>
    </Grid>
  );
};

export default CompaniesSearchBar;
