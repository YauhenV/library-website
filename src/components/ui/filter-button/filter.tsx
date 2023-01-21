import { FC, useState } from 'react';

import filterIconDown from '../../../assets/icon/Icon_filter_down.svg';
import filterIconUp from '../../../assets/icon/Icon_filter_up.svg';

import styled from './filter.module.scss';

export const Filter: FC = () => {
    const [isActive, setIsActive] = useState(false);

    const buttonHandler = () => {
        setIsActive(!isActive)
    }

    return (
        <button className={styled.button} type='button' onClick={buttonHandler}>
            <img className={styled.icon} src={isActive ? filterIconUp : filterIconDown} alt='Filter icon' />
            <span className={styled.label}>По рейтингу</span>
        </button>
    )
}
