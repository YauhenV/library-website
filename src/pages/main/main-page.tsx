import React, { useState } from 'react';

import { ContentBooks } from '../../components/content-books';
import { FilterLine } from '../../components/filter-line';


export const MainPage = () => {
    const [lineView, setLineView] = useState(false);

    const changeViewHandler = (value:boolean) => {
        setLineView(value)
    }

    return (
        <React.Fragment>
            <FilterLine lineViewOut={changeViewHandler} lineViewIn={lineView}/>
            <ContentBooks lineView={lineView} />
        </React.Fragment>
    )
}
