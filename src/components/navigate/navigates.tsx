import { FC } from 'react';

import categoriesData from '../../data/category.json'
import { Text } from '../ui/text';
import { Title } from '../ui/title';

import styled from './navigates.module.scss';

export const Navigates:FC = () => (
    <nav>
      <div className={styled.category}>
        <div className={styled.block}>
          <div className={styled.navTitle}>
            <Title tag='h5'>
              Витрина книг
            </Title>
          </div>
          <div className={styled.bookCategory}>
            <ul className={styled.list}>
              <li>
                <Text largeSize={true}>
                  Все книги
                </Text>
              </li>
              {categoriesData.categories.map(item => (
                <li key={item.id}>
                  <Text largeSize={true} span={true}>
                    {item.name}
                  </Text>
                  <Text span={true}>
                  {item.bookAmount}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styled.block}>
          <Title tag='h5'>
            Правила пользования
          </Title>
        </div>
        <div className={styled.block}>
          <Title tag='h5'>
            Договор оферты
          </Title>
        </div>
      </div>
    </nav>
  )
