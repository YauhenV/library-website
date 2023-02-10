import { FC } from 'react';

import { Text } from '../text';

import styled from './book-name-line.module.scss';

interface BookNameLineProps {
    category: string | undefined;
    bookName: string | undefined;
}

export const BookNameLine: FC<BookNameLineProps> = ({ category, bookName}) => (
    <section className={styled.bookLine}>
        <div className={styled.text}>
            <Text span={true}>
                {category} 
            </Text>
            <Text span={true}>
                /
            </Text>
            <Text span={true}>
                {bookName}
            </Text>
        </div>
    </section>
)
