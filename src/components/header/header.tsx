import { FC } from 'react';
import { Link } from 'react-router-dom';

import avatarImg from '../../assets/avatar.png';
import logoImg from '../../assets/logo.svg';
import { useBurgerMenuContext } from '../../context/burger-menu';
import { Text } from '../ui/text';
import { Title } from '../ui/title';

import styled from './header.module.scss';

export const Header:FC = () => {
  const { isActiveBurgerMenu: isActive, burgerMenuHandler, ref } = useBurgerMenuContext();

  return (
    <header className={styled.header}>
      <div className={styled.wrapper}>
        <button type='button' className={styled.burgerMenu} onClick={burgerMenuHandler}  ref={ref} data-test-id='button-burger'>
          <span className={`${styled.burgerMenuIcon} ${isActive ? styled.menuActive : null}`} />
        </button> 
        <div className={styled.logo}>
          <Link to="/">
            <img src={logoImg} alt="logo" />
          </Link>
        </div>
        <div className={styled.body}>
          <div className={styled.title}>
            <Title tag='h3'>
              Библиотека
            </Title>
          </div>
          <div className={styled.userBlock}>
            <Text boldWeight={true}>Привет, Иван!</Text>
            <img className={styled.userImg} src={avatarImg} alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  )
} 