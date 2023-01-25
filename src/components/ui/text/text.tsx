import React, { FC, ReactNode } from 'react';
import cnBind from 'classnames/bind';

import styled from './text.module.scss';

interface TextProps {
    children: ReactNode;
    largeSize?: boolean;
    boldWeight?: boolean;
    span?:true;
}

export const Text: FC<TextProps> = ({ largeSize=false, boldWeight=false, children, span=false }) => {

    const tagElement = () => {
        if (span) {
            return (
                'span'
            )
        }

        return 'p'
    }
    const cx = cnBind.bind(styled);
    const textStyles = cx('text', {
        bold: boldWeight,
        large: largeSize,
      });

    return (
        React.createElement(tagElement(), {className: textStyles}, children)
    )
}
