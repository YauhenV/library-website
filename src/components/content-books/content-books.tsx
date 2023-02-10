import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import booksData from '../../data/books.json'
import { BookCard } from '../book-card';

import styled from './content-books.module.scss';

interface ContentBooksProps {
  lineView?: boolean,
}

export const ContentBooks:FC<ContentBooksProps> = ({lineView=false}) => (
    <section className={styled.books}>
      <div className={lineView ? styled.lineView : styled.blockView}>
        {booksData.business.map(item => (
          
          <NavLink to={`/books/${item.category}/${item.id}`} key={item.id}>
            <BookCard
              title={item.title}
              text={item.author}
              bookingButton={item.isBooked}
              disableButton={item.isDisable}
              bookedTill={item.bookedTill}
              image={item.image}
              rating={item.rating}
              lineView={lineView}
            />
          </NavLink>
        ))}
      </div>
    </section>
  )
