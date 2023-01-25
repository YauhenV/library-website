import React, { FC, ReactNode } from 'react';

import './title.module.scss';

interface TitleProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    children: ReactNode;
}

export const Title: FC<TitleProps> = ({ tag, children}) => React.createElement(tag, null, children)
