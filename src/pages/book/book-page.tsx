import React from 'react';
import { useParams } from 'react-router-dom';

import noBookImage from '../../assets/icon/Icon_no_Book_Image.svg';
import avatarIcon from '../../assets/icon/icon-avatar-reviews.svg';
import { BookNameLine } from '../../components/ui/book_name-line-header';
import { BookPageTitle } from '../../components/ui/book-page-title';
import { Button } from '../../components/ui/button';
import { StarsRating } from '../../components/ui/stars-rating';
import { Text } from '../../components/ui/text';
import { Title } from '../../components/ui/title';
import booksData from '../../data/books.json';
import booksCategory from '../../data/category.json';

import styled from './book-page.module.scss';

export const BookPage = () => {
    const {category, bookId} = useParams();
    const categoryActual = booksCategory.categories.find((cat) => cat.category === category)
    const bookActual = booksData.business.find((book) => book.id === bookId)

    const buttonTextHandler = () => {
        if (!bookActual?.isDisable) {
          if (bookActual?.isBooked) {
            return 'Забронирована'
          }
    
            return 'Забронировать'
          } 
        
        if (bookActual?.bookedTill) {
          const date = new Date (bookActual?.bookedTill)
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

    return (
        <React.Fragment>
                <BookNameLine category={categoryActual?.name} bookName={bookActual?.title}/>
                <section className={styled.content}>
                    <div className={styled.mainBlock}>
                        <div className={bookActual?.image ? styled.image: styled.noImage}>
                            <img className={styled.iconLine} src={bookActual?.image ? bookActual.image : noBookImage} alt='Book icon' />
                        </div>
                        <div className={styled.textMainBlock}>
                            <div className={styled.title}>
                                <Title tag='h3'>
                                    {bookActual?.title}
                                </Title>
                            </div>
                            <div className={styled.authors}>
                                <Title tag='h5'>
                                    {bookActual?.author}
                                </Title>
                            </div>
                            <div className={styled.button}>
                                <Button text={buttonTextHandler} largeSize={true} booking={bookActual?.isBooked} disable={bookActual?.isDisable} />
                            </div>
                            <div className={styled.aboutBook}>
                                <BookPageTitle>
                                    О книге
                                </BookPageTitle>
                                <div className={styled.aboutBookText}>
                                    <Text largeSize={true}>
                                        Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
                                    </Text>
                                    <Text largeSize={true}>
                                        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                                    </Text>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={`${styled.aboutBookTablet} ${styled.block}`}>
                                <BookPageTitle>
                                    О книге
                                </BookPageTitle>
                                <div className={styled.aboutBookText}>
                                    <Text largeSize={true}>
                                        Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
                                    </Text>
                                    <Text largeSize={true}>
                                        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                                    </Text>
                                </div>
                            </div>

                    <div className={styled.block}>
                        <BookPageTitle>
                            Рейтинг
                        </BookPageTitle>
                        <StarsRating rating={bookActual?.rating} full={true} />
                    </div>
                    <div className={styled.block}>
                        <BookPageTitle>
                            Подробная информация
                        </BookPageTitle>
                        <div className={styled.infoBlock}>
                            <div className={styled.info}>
                                <div className={styled.infoTitle}>
                                    <Text largeSize={true} boldWeight={true}>
                                        Издательство
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        Год издания
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        Страниц
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        Переплёт
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        Формат
                                    </Text>
                                </div>
                                <div className={styled.infoData}>
                                    <Text largeSize={true}>
                                        Питер
                                    </Text>
                                    <Text largeSize={true}>
                                        2019
                                    </Text>
                                    <Text largeSize={true}>
                                        288
                                    </Text>
                                    <Text largeSize={true}>
                                        Мягкая обложка
                                    </Text>
                                    <Text largeSize={true}>
                                        70х100
                                    </Text>
                                </div>
                            </div>
                            <div className={styled.info2}>
                                <div className={styled.infoTitle}>
                                    <Text largeSize={true} boldWeight={true}>
                                        Жанр
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        Вес
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        ISBN
                                    </Text>
                                    <Text largeSize={true} boldWeight={true}>
                                        Изготовитель
                                    </Text>
                                </div>
                                <div className={styled.infoData}>
                                    <Text largeSize={true}>
                                        Компьютерная литература
                                    </Text>
                                    <Text largeSize={true}>
                                        370 г
                                    </Text>
                                    <Text largeSize={true}>
                                        978-5-4461-0923-4
                                    </Text>
                                    <Text largeSize={true}>
                                        ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                                    </Text>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styled.reviews}>
                        <BookPageTitle>
                            Отзывы <span className={styled.reviewsAmount}> {bookActual?.reviews ? 2 : 0}</span>
                        </BookPageTitle>
                        {bookActual?.reviews ? (
                            <React.Fragment>
                                <div className={styled.review}>
                                    <div className={styled.reviewsTitle}>
                                        <img src={avatarIcon} alt="Avatar" />
                                        <div className={styled.reviewsName}>
                                            <Text span={true} largeSize={true}>
                                                Иван Иванов
                                            </Text>
                                            <Text span={true} largeSize={true}>
                                                5 января 2019
                                            </Text>
                                        </div>
                                    </div>
                                    <StarsRating rating={4} />
                                </div>
                            
                                <div className={styled.review}>
                                    <div className={styled.reviewsTitle}>
                                        <img src={avatarIcon} alt="Avatar" />
                                        <div className={styled.reviewsName}>
                                            <Text span={true} largeSize={true}>
                                                Николай Качков
                                            </Text>
                                            <Text span={true} largeSize={true}>
                                                20 июня 2018
                                            </Text>
                                        </div>
                                    </div>
                                    <StarsRating rating={4} />
                                    <div className={styled.reviewsText}>
                                        <Text largeSize={true}>
                                            Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                                        </Text>
                                    </div>
                                </div>
                            
                                <div className={styled.review}>
                                    <div className={styled.reviewsTitle}>
                                        <img src={avatarIcon} alt="Avatar" />
                                        <div className={styled.reviewsName}>
                                            <Text span={true} largeSize={true}>
                                                Екатерина Беляева
                                            </Text>
                                            <Text span={true} largeSize={true}>
                                                18 февраля 2018
                                            </Text>
                                        </div>
                                    </div>
                                    <StarsRating rating={2} />
                                </div>
                            </React.Fragment>
                        ) 
                        : null }
                    <div className={styled.reviewsButton}>
                        <Button largeSize={true} text={()=> 'оценить книгу'} />
                    </div>
                            
                </div>
                </section>
        </React.Fragment>
    )
};
