import React from 'react';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header'
import { Button } from '../../components/ui/button';
import { Filter } from '../../components/ui/filter-button';
import { Search } from '../../components/ui/search-input';
import { Text } from '../../components/ui/text';
import { Title } from '../../components/ui/title';
import { ViewButton } from '../../components/ui/view-button';

export const MainPage = () => {
    const inputHandler = (value:string) => (
        value
    )

    return (
        <React.Fragment >
            <Header />
            <section className='main-page'  style={{display: 'flex', flexDirection: 'column', flex: '1 0 auto'}}>
                <div>Main-page!!!</div>
                <Title tag='h1'>Hello World!</Title>
                <Title tag='h2'>Hello World!!</Title>
                <Title tag='h3'>Hello World!!!</Title>
                <Title tag='h4'>Hello World!!!</Title>
                <Text>Hello</Text>
                <Text boldWeight={true}>Hello</Text>
                <Text largeSize={true}>Hello</Text>
                <Text boldWeight={true} largeSize={true}>Hello</Text>
                <div style={{margin:'10px', display:'flex'}}>
                    <Search outInputValue={inputHandler}/>
                    <Filter />
                    <ViewButton />
                    <ViewButton lineIcon={true} />
                </div>
                <div style={{margin:'10px', display:'flex'}}>
                    <Button text='Забронировать' />
                    <Button text='Забронирована' booking={true} />
                    <Button text='Занята до 23.04' disable={true} />
                </div>

            </section>
            <Footer />
        </React.Fragment>
    )
}
