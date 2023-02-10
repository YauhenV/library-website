import { FC, useEffect, useState } from 'react';

import noBookImage from '../../assets/icon/Icon_no_Book_Image.svg';
import { Button } from '../ui/button';
import { StarsRating } from '../ui/stars-rating';
import { Text } from '../ui/text';
import { Title } from '../ui/title';

import styled from './book-card.module.scss';

interface BookCardProps {
  title: string,
  text: string,
  bookingButton?: boolean,
  disableButton?: boolean,
  bookedTill?: string,
  image?: string | undefined,
  rating?: number,
  lineView?: boolean,
}

export const BookCard: FC<BookCardProps> = ({ title, text, bookingButton=false, disableButton=false, bookedTill, image, rating, lineView=false}) => {

  const [titleBook, setTitleBook] = useState(title);
  const [textBook, setTextBook] = useState(text);

  useEffect(() => {
    if (!lineView) {
      if (title.length > 54) {
        setTitleBook(`${title.slice(0, 54)  }...`);
      }
    } else if (lineView) {
      setTitleBook(title)
    }
  }, [lineView, title])

  useEffect(() => {
    if (!lineView) {
      if (text.length > 37) {
        setTextBook(`${text.slice(0, 37)  }...`);
      }
    } else if (lineView) {
      setTextBook(text)
    }
  }, [lineView, text])

  const buttonTextHandler = () => {
    if (!disableButton) {
      if (bookingButton) {
        return 'Забронирована'
      }

        return 'Забронировать'
      } 
    
    if (bookedTill) {
      const date = new Date (bookedTill)
      const dateDay = date.getDate();
      const dateMonth = date.getMonth() + 1;
      let dateString = '';
      let monthString = '';

      if (dateDay < 10) {
        dateString = `0${dateDay}`
      } else {
        dateString = `${dateDay}`
      };
      if (dateMonth < 10) {
        monthString = `0${dateMonth}`
      } else {
        monthString = `${dateMonth}`
      };

      return `занята до ${dateString}.${monthString}`
    }

    return 'занята'
  }

  const changeViewBooks = () => {
    if (lineView) {
      return (
        <div className={styled.bookCardLine} data-test-id='card'>
          <div className={styled.bookCardWrapperLine}>
            <div className={image ? styled.imageLine: styled.noImageLine}>
              <img className={styled.iconLine} src={image ? image : noBookImage} alt='Book icon' />
            </div>
            <div className={styled.contentLine}>
              <div className={styled.textBlockLine}>
                <div className={styled.titleLine}>
                  <Title tag='h4'>{titleBook}</Title>
                </div>
                <div className={styled.textLine}>
                  <Text largeSize={true}>{textBook}</Text>
                </div>
              </div>
              <div className={styled.footerLine}>
                <div className={styled.ratingLine}>
                  <StarsRating rating={rating} />
                </div>
                <div className={styled.buttonLine}>
                  <Button text={buttonTextHandler} booking={bookingButton} disable={disableButton} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={styled.bookCard} data-test-id='card'>
        <div className={styled.bookCardWrapper}>
          <div className={image ? styled.image: styled.noImage}>
            <img className={styled.icon} src={image ? image : noBookImage} alt='Book icon' />
          </div>
          <div className={styled.textBlock}>
            <div className={styled.rating}><StarsRating rating={rating} /></div>
            <div className={styled.title}>
              <Text boldWeight={true}>{titleBook}</Text>
            </div>
            <div className={styled.text}>
              <Text>{textBook}</Text>
            </div>
          </div>
          <div className={lineView ? styled.buttonLine : styled.button}>
            <Button text={buttonTextHandler} booking={bookingButton} disable={disableButton} />
          </div>
        </div>
      </div>
    )
  }

  return (
    changeViewBooks()
  )
}