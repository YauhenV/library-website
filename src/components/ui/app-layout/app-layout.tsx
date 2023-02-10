import { FC, ReactNode } from 'react';

import { BurgerMenuContextProvider } from '../../../context/burger-menu';

import styled from './app-layout.module.scss';

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
        <div className={styled.wrapper}>
            <BurgerMenuContextProvider>
                {children}
            </BurgerMenuContextProvider>
        </div>
    )
    
    