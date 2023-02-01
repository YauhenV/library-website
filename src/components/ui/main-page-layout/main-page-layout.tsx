import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigates } from '../../navigate';

import styled from './main-page-layout.module.scss';

export const MainPageLayout: FC = () => (
    <div className={styled.content}>
        <Navigates />
        <div className={styled.body}>
            <Outlet />
        </div>
    </div>
)