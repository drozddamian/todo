import { SET_FILTER, FilterActionTypes } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";
import { visibilityFilterType } from "../../types";


const initialState: visibilityFilterType = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action: FilterActionTypes) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter
