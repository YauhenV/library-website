import React, { useState } from 'react';

import { ContentBooks } from '../../components/content-books';
import { FilterLine } from '../../components/filter-line';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header'
import { Navigates } from '../../components/navigate';
import { AppLayout } from '../../components/ui/app-layout';
import { Main } from '../../components/ui/main';

import styled from './main-page.module.scss';

export const MainPage = () => {
    const [lineView, setLineView] = useState(false);

    const changeViewHandler = (value:boolean) => {
        setLineView(value)
    }

    return (
        <AppLayout >
            <div className={styled.header}>
                <Header />
            </div>
            <div className={styled.content}>
                <div className={styled.nav}>
                    <Navigates />
                </div>
                <div className={styled.body}>
                    <Main>
                        <FilterLine lineViewOut={changeViewHandler} lineViewIn={lineView}/>
                        <ContentBooks lineView={lineView} />
                    </Main>
                </div>
            </div>
            <Footer />
        </AppLayout>
    )
}
