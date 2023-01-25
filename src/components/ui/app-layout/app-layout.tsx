import React, { FC, ReactNode } from 'react';

import styled from './app-layout.module.scss';

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => React.createElement('div', {className: styled.wrapper}, children)