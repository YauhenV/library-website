import { FC, ReactNode } from 'react';

import { Title } from '../title';

import styled from './book-page-title.module.scss';

interface BookPageTitleProps {
    children: ReactNode;
}

export const BookPageTitle: FC<BookPageTitleProps> = ({ children }) => (
    <div className={styled.title}>
        <Title tag='h5'>
            {children}
        </Title>
    </div>
)
