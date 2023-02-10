import { FC, useEffect,useState } from 'react';
import cnBind from 'classnames/bind';

import clearIcon from '../../../assets/icon/Icon_clear_input.svg';
import { useWindowSize } from '../../../hooks/use-window-size';
import { ViewButton } from '../view-button';

import styled from './search.module.scss';

interface SearchProps {
    inputStateProps: boolean,
    handler: (value: boolean) => void,
  }

interface SearchIconProps {
  style: string,
}

const SearchIcon:FC<SearchIconProps> = ({style}) => (
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={style}>
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
)

export const Search: FC<SearchProps> = ({ inputStateProps, handler }) => {
    const [inputState, setInputState] = useState(inputStateProps);
    const [value, setValue] = useState('');
    const windowSize = useWindowSize()
    
    const showInputHandler = () => {
        if (windowSize.width && (windowSize.width <= 650)) {
            setInputState(true);
        }
    }
    const hideInputHandler = () => {
        if (windowSize.width && (windowSize.width <= 650)) {
            setInputState(false);
        }
    }

    const searchButtonShow = () => {
        if (windowSize.width && (windowSize.width <= 650)) {
            return (
                <div className={inputState ? styled.searchButton : undefined} data-test-id='button-search-open'>
                    <ViewButton searchIcon={true} handler={showInputHandler} />
                </div >
            )
        }

        return null
    }

    useEffect(() => {
      handler(inputState);
    }, [handler, inputState])

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
      };

    const cx = cnBind.bind(styled);
    const clearIconStyles = cx('iconClear', {
        iconClearHandler: inputState,
    });

    return (
        <div className={`${styled.search} ${inputState ? styled.searchMargin : null}`}>
            {searchButtonShow()}
            <input className={`${styled.input} ${inputState ? styled.inputHandler : null}`} type='text' placeholder='Поиск книги или автора...' onChange={inputChangeHandler} onClick={showInputHandler} value={value} data-test-id='input-search' />
            <SearchIcon style={styled.iconSearch} />
            <button type='button' className={clearIconStyles} onClick={hideInputHandler} data-test-id='button-search-close'>
                <img src={clearIcon} alt='Clear input icon' />
            </button>
        </div>
    )
}
