import React, { FC, ReactNode } from 'react';

import styled from './wrapper.module.scss';

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => React.createElement('div', {className: styled.wrapper}, children)