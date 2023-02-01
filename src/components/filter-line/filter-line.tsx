import { FC } from 'react';

import { Filter } from '../ui/filter-button';
import { Search } from '../ui/search-input';
import { ViewButton } from '../ui/view-button';

import styled from './filter-line.module.scss';

interface FilterLineProps {
  lineViewOut: (value:boolean) => void,
  lineViewIn: boolean,
}

export const FilterLine:FC<FilterLineProps> = ({lineViewOut, lineViewIn}) => {

  const changeViewHandler = () => {
    lineViewOut(!lineViewIn)
  }

  return (
    <div className={styled.filterLine}>
      <div className={styled.block}>
        <div className={styled.search}>
          <Search />
        </div>
        <Filter />
      </div>
      <div className={styled.block}>
        <div className={styled.blockViewButton} data-test-id='button-menu-view-window'>
          <ViewButton active={!lineViewIn} handler={changeViewHandler} />
        </div>
        <div className={styled.lineViewButton} data-test-id='button-menu-view-list'>
          <ViewButton lineIcon={true} active={lineViewIn} handler={changeViewHandler} />
        </div>
      </div>
    </div>
  ) 
}
