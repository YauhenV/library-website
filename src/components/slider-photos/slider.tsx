import { FC, useState } from 'react';
import { FreeMode, Navigation, Pagination,Scrollbar, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import './slider.scss';

import 'swiper/scss';
import 'swiper/scss/thumbs';
import 'swiper/scss/scrollbar' ;
import 'swiper/scss/pagination';

const photoArray = [
  'https://i.pinimg.com/originals/76/ab/13/76ab131499536ba3698e0038c6ed93b3.png', 
  'https://static-cse.canva.com/blob/585523/.png', 
  'https://marketplace.canva.com/EADzX7x5yYU/1/0/1003w/canva-%D0%BC%D1%8F%D1%82%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D1%84%D0%B5-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BC%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%B5%D0%B4%D0%B0-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0-%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-4he1eqkeAQg.jpg', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcwhO1MIN2gacujxMmORnxaCtHLP9yg7lUQ&usqp=CAU',
  'https://cs11.pikabu.ru/post_img/big/2018/12/09/9/15443711151883240.jpg', 
  'https://storage.yvision.kz/images/user/creepy_neko/E96lKtOC8HgN4r77z66axAAFMn9l3I.jpg'
]

export const Slider:FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <div className='swiperBlock'>
      <Swiper
        loop={false}
        spaceBetween={10}
        navigation={false}
        modules={[Thumbs, FreeMode, Navigation, Pagination]}
        thumbs={thumbsSwiper ? {swiper: thumbsSwiper} : undefined }
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          900: {
            pagination: false
          }
        }}
        className='mySwiper2'
        data-test-id='slide-big'
      >
        {photoArray.map(item => (
          <SwiperSlide key={Math.random()}>
            <img src={item} alt='Book'/>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop={false}
        spaceBetween={30}
        slidesPerView={5}
        scrollbar={{
          hide: true
        }}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode, Navigation, Scrollbar, Pagination]}
        onSwiper={setThumbsSwiper}
        className='mySwiper'
      >
        {photoArray.map(item => (
          <SwiperSlide key={Math.random()} data-test-id='slide-mini'>
            <img src={item} alt='Book'/>
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  )
}