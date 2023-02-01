import { FC, useState } from 'react';
import cnBind from 'classnames/bind';

import styled from './button.module.scss';

interface ButtonProps {
    text: () => string,
    largeSize?: boolean,
    booking?: boolean,
    disable?: boolean,
}

export const Button: FC<ButtonProps> = ({text, largeSize=false,  booking=false, disable=false}) => {
    const [isActive, setIsActive] = useState(false);

    const buttonHandler = () => {
        setIsActive(!isActive)
    }

    const cx = cnBind.bind(styled);
    const buttonStyles = cx('button', {
        bookingButton: booking,
        disableButton: disable,
        largePadding: largeSize,
      });
      const labelStyles = cx('label', {
        bookingLabel: booking,
        disableLabel: disable,
        largeButton: largeSize,
      });

    return (
        <button className={buttonStyles} type='button' onClick={buttonHandler} disabled={disable}>
            <span className={labelStyles}>{text()}</span>
        </button>
    )
}
