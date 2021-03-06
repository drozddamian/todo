import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import { visibilityFilterType } from "../types"
import { RootState } from "../redux/reducers";

const VisibilityFilters = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state: RootState) => state.visibilityFilter)

  const visibilityFilterKeys = Object.keys(VISIBILITY_FILTERS)

  const handleFilterClick = (filter: visibilityFilterType) => () => {
    dispatch(setFilter(filter))
  }

  return (
    <FiltersButtonGroup>
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
    </FiltersButtonGroup>
  );
};

const FiltersButtonGroup = styled(ButtonGroup)`
  width: 100%;
`

export default VisibilityFilters
