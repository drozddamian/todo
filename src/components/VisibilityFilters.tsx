import React from "react";
import styled, { css } from "styled-components";
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
    <div>
      {visibilityFilterKeys.map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        const isCurrentFilterActive = currentFilter === activeFilter

        return (
          <FilterItem
            key={`visibility-filter-${currentFilter}`}
            onClick={handleFilterClick(currentFilter)}
            isActive={isCurrentFilterActive}
          >
            {currentFilter}
          </FilterItem>
        );
      })}
    </div>
  );
};

const FilterItem = styled.span`
  padding: 0.3rem 0;
  margin: 0 0.3rem;
  cursor: pointer;
  
  ${(props) => props.isActive && css`
    border-bottom: 1px solid black;
  `};
`

export default VisibilityFilters
