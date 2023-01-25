import avatarImg from '../../assets/avatar.png';
import logoImg from '../../assets/logo.svg';
import { Text } from '../ui/text';
import { Title } from '../ui/title';

import styled from './header.module.scss';

export const Header = () => (
    <header className={styled.header}>
      <div className={styled.wrapper}>
        <button type='button' className={styled.burgerMenu}>
            <span className={styled.burgerMenuIcon} />
          </button> 
        <div className={styled.logo}>
          <img src={logoImg} alt="logo" />
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