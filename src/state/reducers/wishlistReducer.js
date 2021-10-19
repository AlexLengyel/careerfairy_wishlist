import update from "react-addons-update";

import {
  SET_COMPANIES,
  ADD_COMPANY,
  SET_SEARCH_PARAMETER,
  SET_DESCENDING_ORDER,
  HANDLE_UPVOTE,
} from "../actionTypes";

const initialState = {
  companies: [],
  searchParameter: "",
  descendingOrder: true,
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMPANIES:
      return {
        ...state,
        companies: payload,
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, payload],
      };
    case SET_SEARCH_PARAMETER:
      return {
        ...state,
        searchParameter: payload,
      };
    case SET_DESCENDING_ORDER:
      return {
        ...state,
        descendingOrder: payload,
      };
    case HANDLE_UPVOTE:
      return update(state, {
        companies: {
          [payload.companyIndexAndId]: {
            upvoted: { $set: payload.upvoted },
          },
        },
      });
    default:
      return state;
  }
};

export default wishlistReducer;
