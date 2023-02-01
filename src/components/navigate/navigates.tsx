import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import categoriesData from '../../data/category.json'
import { Text } from '../ui/text';
import { Title } from '../ui/title';

import styled from './navigates.module.scss';

export const Navigates:FC = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NavLinkStyles = ({isActive}: any) => isActive ? styled.active : styled.noActive;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NavSubLinkStyles = ({isActive}: any) => isActive ? styled.subActive : styled.subNoActive;

  return (
    <nav className={styled.nav}>
      <div className={styled.category}>
        <div className={styled.block}>
          <NavLink to="/books" className={NavLinkStyles}>
            <div className={styled.navTitle}>
              <Title tag='h5'>
                Витрина книг
              </Title>
            </div>
          </NavLink>
          <div className={styled.bookCategory}>
            <ul className={styled.list}>
              <li>
                <NavLink to="/books/all" className={NavSubLinkStyles}>
                  <div className={styled.categoryTitle}>
                    <Text largeSize={true} span={true}>
                      Все книги
                    </Text>
                  </div>
                </NavLink>
              </li>
              {categoriesData.categories.map(item => (
                <li key={item.id}>
                  <NavLink to={`/books/${item.category}`} className={NavSubLinkStyles}>
                      <div className={styled.categoryBlock}>
                        <div className={styled.categoryTitle}>
                          <Text largeSize={true} span={true}>
                            {item.name}
                          </Text>
                        </div>
                        <div className={styled.categoryAmount}>
                          <Text span={true}>
                            {item.bookAmount}
                          </Text>
                        </div>
                      </div>
                  </NavLink> 
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styled.block}>
          <NavLink to="/terms" className={NavLinkStyles}>
            <Title tag='h5'>
              Правила пользования
            </Title>
          </NavLink>
        </div>
        <div className={styled.block}>
          <NavLink to="/contract" className={NavLinkStyles}>
            <Title tag='h5'>
              Договор оферты
            </Title>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}