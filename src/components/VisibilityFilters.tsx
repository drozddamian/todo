import React from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import { visibilityFilterType } from "../types"

const VisibilityFilters = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector(state => state.visibilityFilter)

  const visibilityFilterKeys = Object.keys(VISIBILITY_FILTERS)

  const handleFilterClick = (filter: visibilityFilterType) => () => {
    dispatch(setFilter(filter))
  }


  return (
    <div className="visibility-filters">
      {visibilityFilterKeys.map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        const isCurrentFilterActive = currentFilter === activeFilter

        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            onClick={handleFilterClick(currentFilter)}
            className={cx(
              "filter",
              isCurrentFilterActive && "filter--active"
            )}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters
