import { FC, ReactNode } from 'react';
import cnBind from 'classnames/bind';

import styled from './text.module.scss';

interface TextProps {
    children: ReactNode;
    largeSize?: boolean;
    boldWeight?: boolean;
}

export const Text: FC<TextProps> = ({ largeSize=false, boldWeight=false, children }) => {
    const cx = cnBind.bind(styled);
    const textStyles = cx('text', {
        bold: boldWeight,
        large: largeSize,
      });

    return (
        <p className={textStyles}>
            {children}
        </p>
    )
}
