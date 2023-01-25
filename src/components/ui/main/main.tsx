import { FC, ReactNode } from 'react';

import styled from './main.module.scss';

interface MainProps {
    children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => (
    <main className={styled.main}>
        {children}
    </main>
)

