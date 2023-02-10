import { FC, ReactNode } from 'react';

import { Title } from '../title';

import styled from './book-page-title.module.scss';

interface BookPageTitleProps {
    text: string,
    children?: ReactNode;
}

export const BookPageTitle: FC<BookPageTitleProps> = ({ text, children }) => (
    <div className={styled.title}>
        <Title tag='h5'>{text}</Title>
        {children}
    </div>
)
