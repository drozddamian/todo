import React from "react";
import { Button, ButtonGroup } from 'reactstrap';
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
    <ButtonGroup>
      {visibilityFilterKeys.map(filterKey => {
        const filter = VISIBILITY_FILTERS[filterKey]
        const isCurrentFilterActive = filter === activeFilter

        return (
          <Button
            color='primary'
            key={`visibility-filter-${filter}`}
            onClick={handleFilterClick(filter)}
            active={isCurrentFilterActive}
          >
            {filter}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default VisibilityFilters
