import { FC } from 'react';

import booksData from '../../data/books.json'
import { BookCard } from '../book-card';

import styled from './content-books.module.scss';

interface ContentBooksProps {
  lineView?: boolean,
}

// interface DataTS {
//   business: BooksDataTS[],
//   detective: BooksDataTS[],
//   children: BooksDataTS[],
//   foreign: BooksDataTS[],
//   history: BooksDataTS[],
//   classic: BooksDataTS[],
//   psychology: BooksDataTS[],
//   computers: BooksDataTS[],
//   culture: BooksDataTS[],
//   science: BooksDataTS[],
//   publicistic: BooksDataTS[],
//   references: BooksDataTS[],
//   scifi: BooksDataTS[],
//   humor: BooksDataTS[],
// }

// interface DataTS {
//   business: BooksDataTS[],
//   detective: BooksDataTS[],
//   children: BooksDataTS[],
//   foreign: BooksDataTS[],
//   history: BooksDataTS[],
//   classic: BooksDataTS[],
//   psychology: BooksDataTS[],
//   computers: BooksDataTS[],
//   culture: BooksDataTS[],
//   science: BooksDataTS[],
//   publicistic: BooksDataTS[],
//   references: BooksDataTS[],
//   scifi: BooksDataTS[],
//   humor: BooksDataTS[],
// }

// type DataTS = 'business' | 'detective' | 'children' | 'foreign' | 'history' | 'classic' | 'psychology' | 'computers' | 'culture' | 'science' | 'publicistic' | 'references' | 'scifi' | 'humor';

// interface DataTS {
//   [key: string]: BooksDataTS[],
// }

// interface BooksDataTS {
//   id: string,
//   image: string,
//   category: string,
//   author: string,
//   title: string,
//   rating: number,
//   year: number,
//   isBooked: boolean,
//   bookedTill: string,
// }

interface BooksData {
  [key: string]: Array<{
    id: string,
    image: string,
    category: string,
    author: string,
    title: string,
    rating: number,
    year: number,
    isBooked: boolean,
    bookedTill: string,
  }>
}

export const ContentBooks:FC<ContentBooksProps> = ({lineView=false}) => {

  // const booksDataConst: BooksData = booksData;

  Object.keys(booksData).map(item => console.log(item));
  // Object.keys(booksDataConst).map((categories) =>
  //   (booksDataConst[categories]).map((book) => console.log(book))
  // );

  return (
    <section className={styled.books}>
      <div className={lineView ? styled.lineView : styled.blockView}>
        {booksData.business.map(item => (
          <BookCard key={item.id}
            title={item.title}
            text={item.author}
            bookingButton={item.isBooked}
            disableButton={item.isDisable}
            bookedTill={item.bookedTill}
            image={item.image}
            rating={item.rating}
            lineView={lineView}
          />
        ))}
      </div>
    </section>
  )
}
