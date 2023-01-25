import React from 'react';

import bookImage from '../../assets/book_image.png';
import { BookCard } from '../../components/book-card';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header'
import { Navigates } from '../../components/navigate';
import { AppLayout } from '../../components/ui/app-layout';
import { Button } from '../../components/ui/button';
import { Filter } from '../../components/ui/filter-button';
import { Search } from '../../components/ui/search-input';
import { Text } from '../../components/ui/text';
import { Title } from '../../components/ui/title';
import { ViewButton } from '../../components/ui/view-button';

export const TestPage = () => {
    const inputHandler = (value:string) => (
        value
    )

    return (
        <AppLayout >
            <Header />
            <section className='main-page'  style={{display: 'flex', flexDirection: 'column', flex: '1 0 auto'}}>
                <div>Main-page!!!</div>
                <Title tag='h1'>Hello World!</Title>
                <Title tag='h2'>Hello World!!</Title>
                <Title tag='h3'>Hello World!!!</Title>
                <Title tag='h4'>Hello World!!!</Title>
                <Title tag='h5'>Hello World!!!</Title>
                <Text>Hello</Text>
                <Text boldWeight={true}>Hello</Text>
                <Text largeSize={true}>Hello</Text>
                <Text boldWeight={true} largeSize={true}>Hello</Text>
                <div style={{margin:'10px', display:'flex'}}>
                    <Search />
                    <Filter />
                    <ViewButton />
                    <ViewButton lineIcon={true} />
                </div>
                {/* <div style={{margin:'10px', display:'flex'}}>
                    <Button />
                    <Button booking={true} />
                    <Button disable={true} />
                </div> */}
                <div style={{display:'flex', gap:'10px'}}>
                    <BookCard 
                        title='Грокаем алгоритмы. Иллюстрированное пособие для программирования'
                        text='Адитья Бхаргава, 2019'
                    />

                    <BookCard 
                        title='Грокаем алгоритмы. Иллюстрированное пособие для програ...'
                        text='Адитья Бхаргава, Патрик Нимейер, 2019'
                        bookingButton={true}
                        image={bookImage}
                        rating={1}
                    />

                    <BookCard 
                        title='Грокаем алгоритмы.'
                        text='Адитья Бхаргава, 2019 Адитья Бхаргава, Патрик Нимейер, 2019'
                        bookingButton={true}
                        image={bookImage}
                        rating={3}
                    />

                    <BookCard 
                        title='Грокаем алгоритмы.'
                        text='Адитья Бхаргава, 2019'
                        bookingButton={false}
                        image={bookImage}
                        rating={5}
                    />
                </div>

            </section>

            <Navigates />
            <Footer />
        </AppLayout>
    )
}
