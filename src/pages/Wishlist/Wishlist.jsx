import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { wishlistActionCreators } from "../../state/action-creators";
import useStyles from "./styles";
import companies from "../../data/companies";
import CompaniesSearchBar from "../../components/SearchBars/CompaniesSearchBar/CompaniesSearchBar";
import WishlistCompanyCard from "../../components/Cards/WishlistCompanyCard/WishlistCompanyCard";

const Wishlist = () => {
  // Redux
  const dispatch = useDispatch();
  const { setCompanies } = bindActionCreators(wishlistActionCreators, dispatch);
  const companiesState = useSelector(
    (state) => state.wishlistReducer.companies
  );
  const searchParameterState = useSelector(
    (state) => state.wishlistReducer.searchParameter
  );
  const descendingOrderState = useSelector(
    (state) => state.wishlistReducer.descendingOrder
  );

  useEffect(() => {
    setCompanies(companies.sort((a, b) => a.id - b.id));
  }, []); // eslint-disable-line

  /*
  const [orderedFilteredCompanies, setOrderedFilteredCompanies] = useState([]);

  useEffect(() => {
    if (descendingOrderState) {
      setOrderedFilteredCompanies(
        companiesState.sort((a, b) => b.upvotes - a.upvotes)
      );
    } else {
      setOrderedFilteredCompanies(
        companiesState.sort((a, b) => a.upvotes - b.upvotes)
      );
    }
  }, [companiesState, descendingOrderState]);
*/

  const handleOrderedFilteredCompanies = () => {
    let orderedFilteredCompanies = [];

    // Filter by search parameter
    if (searchParameterState) {
      orderedFilteredCompanies = companiesState.filter((company) =>
        company.name.toLowerCase().includes(searchParameterState.toLowerCase())
      );
    } else {
      orderedFilteredCompanies = [...companiesState];
    }

    // Order by descending or ascending
    if (descendingOrderState) {
      orderedFilteredCompanies.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      orderedFilteredCompanies.sort((a, b) => a.upvotes - b.upvotes);
    }

    return orderedFilteredCompanies;
  };

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
          <CompaniesSearchBar />
        </Box>
        <Grid
          container
          justify="center"
          marginY={1}
          marginBottom={4}
          spacing={3}
          sx={{ maxWidth: "90%" }}
        >
          {
            /*orderedFilteredCompanies*/ handleOrderedFilteredCompanies().map(
              (company) => (
                //console.log(company), // Wrong double render if orderedFilteredCompanies is in use
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={company.id}>
                  <WishlistCompanyCard company={company} />
                </Grid>
              )
            )
          }
        </Grid>
      </Grid>
    </>
  );
};

export default Wishlist;
