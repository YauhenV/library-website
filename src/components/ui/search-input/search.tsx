import { FC, useState } from 'react';
import cnBind from 'classnames/bind';

import clearIcon from '../../../assets/icon/Icon_clear_input.svg';

import styled from './search.module.scss';

// interface InputProps {
//     outInputValue: (value: string) => string;
//   }

// export const Search: FC<InputProps> = ({outInputValue}) 
export const Search: FC = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');

      // Возвращаем родителю значение input
    // useEffect(() => {
    //   outInputValue(value && value);
    // }, [outInputValue, value]);

    const focusInputHandler = () => {
        setIsFocus(true);
    }
    const blurInputHandler = () => {
        setIsFocus(false);
    }

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
      };
    const clearInputHandler = () => {
        setValue('');
    }

    const cx = cnBind.bind(styled);
    const searchIconStyles = cx('iconSearch', {
        focusIconSearch : isFocus,
    });
    const clearIconStyles = cx('iconClear', {
        focusIconClear : isFocus,
    });

    return (
        <div className={styled.search}>
            <input className={styled.input} type='text' placeholder='Поиск книги или автора...' onFocus={focusInputHandler} onBlur={blurInputHandler} onChange={inputChangeHandler} value={value} />
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={searchIconStyles}>
            <path d="M7.3335 2.66683C4.75617 2.66683 2.66683 4.75617 2.66683 7.3335C2.66683 9.91083 4.75617 12.0002 7.3335 12.0002C9.91083 12.0002 12.0002 9.91083 12.0002 7.3335C12.0002 4.75617 9.91083 2.66683 7.3335 2.66683ZM1.3335 7.3335C1.3335 4.01979 4.01979 1.3335 7.3335 1.3335C10.6472 1.3335 13.3335 4.01979 13.3335 7.3335C13.3335 10.6472 10.6472 13.3335 7.3335 13.3335C4.01979 13.3335 1.3335 10.6472 1.3335 7.3335Z" />
            <path d="M10.6284 10.6284C10.8887 10.368 11.3108 10.368 11.5712 10.6284L14.4712 13.5284C14.7315 13.7887 14.7315 14.2108 14.4712 14.4712C14.2108 14.7315 13.7887 14.7315 13.5284 14.4712L10.6284 11.5712C10.368 11.3108 10.368 10.8887 10.6284 10.6284Z" />
            <defs>
            <linearGradient id="paint0_linear" x1="7.99216" y1="-6.58317" x2="-28.1338" y2="19.9251" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F83600"/>
            <stop offset="1" stopColor="#F9D423"/>
            </linearGradient>
            <linearGradient id="paint0_linear" x1="7.99216" y1="-6.58317" x2="-28.1338" y2="19.9251" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F83600"/>
            <stop offset="1" stopColor="#F9D423"/>
            </linearGradient>
            </defs>
            </svg>
            <button onClick={clearInputHandler} type='button' className={clearIconStyles}>
                <img src={clearIcon} alt='Clear input icon' />
            </button>
        </div>
    )
}
