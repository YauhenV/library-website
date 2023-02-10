import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../footer';
import { Header } from '../../header';
import { AppLayout } from '../app-layout';
import { Main } from '../main';

export const Layout: FC = () => (
    <AppLayout>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </AppLayout>
)