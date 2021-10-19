import {
  SET_COMPANIES,
  ADD_COMPANY,
  SET_SEARCH_PARAMETER,
  SET_DESCENDING_ORDER,
  HANDLE_UPVOTE,
} from "../actionTypes";

export const setCompanies = (companies) => (dispatch) => {
  const action = {
    type: SET_COMPANIES,
    payload: companies,
  };
  return dispatch(action);
};

export const addCompany = (company) => (dispatch) => {
  const action = {
    type: ADD_COMPANY,
    payload: company,
  };
  return dispatch(action);
};

export const setSearchParameter = (companies) => (dispatch) => {
  const action = {
    type: SET_SEARCH_PARAMETER,
    payload: companies,
  };
  return dispatch(action);
};

export const setDescendingOrder = (boolean) => (dispatch) => {
  const action = {
    type: SET_DESCENDING_ORDER,
    payload: boolean,
  };
  return dispatch(action);
};

export const handleUpvote =
  ({ companyIndexAndId, upvoted }) =>
  (dispatch) => {
    const action = {
      type: HANDLE_UPVOTE,
      payload: { companyIndexAndId, upvoted },
    };
    return dispatch(action);
  };
