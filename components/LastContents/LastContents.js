import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'
import { Navigation, Pagination } from 'swiper';
import {Card , Button} from "react-bootstrap"
import React from "react";


import styles from "./LastContents.module.css";

import SwiperCore from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  
export default function LastContents() {

  const data = [
    {
      id:'1',
      number: 'p1'
    },
    {
      id:'2',
      number: 'p2'
    },
    {
      id:'3',
      number: 'p3'
    },
    {
      id:'4',
      number: 'p1'
    },
    {
      id:'5',
      number: 'p2'
    },
    {
      id:'6',
      number: 'p3'
    },
    {
      id:'7',
      number: 'p1'
    },
    {
      id:'8',
      number: 'p2'
    },
    {
      id:'9',
      number: 'p3'
    }
  ]
  
    return (
      <div className={styles.container}>
        <div className={styles.lg}>
            <section className={styles.sliderHeader}>
              <h3>آخــریــن مــحــصــولــات</h3>
            </section>
            <div className={styles.sliderContainer}>
            <section className={styles.slider}>
              <Swiper dir="rtl" slidesPerView={'auto'} spaceBetween={10} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={true} pagination={{
                  "clickable": true
                }} navigation={true} className={styles.mySwiper}>
                  <SwiperSlide style={{ width: '182px' }} >
                  <section className={styles.offerSection}>
                    <img className={styles.offerImageSvg} src="/assets/images/offer.svg" alt="offerSvg" />
                    <img className={styles.offerImage} src="/assets/images/offer.png" alt="offer" />
                    <button className={styles.more}>
                      {'مشاهده همه >'}
                    </button>
                  </section>
                  </SwiperSlide>
                {data.map(item => 
                    <SwiperSlide key={item.id} className={styles.swiperSlider}>
                    <section className={styles.card}>
                      <section className={styles.cardImg}>
                        <img src={`/assets/images/${item.number}.jpg`} alt="product" />
                      </section>
                      <section className={styles.cardName}>
                        <h1> صفحه کلاج شرکتی تقویتی</h1>
                      </section>
                      <section className={styles.cardText}>
                       <p className={styles.discountPrice}>
                       ۱۸۵۰۰۰
                       </p>
                       <p className={styles.discountPercent}>
                       ۱۰%
                       </p>
                      </section>
                      <section>
                        <p className={styles.mainPrice}>
                          ۲۱۰۰۰۰
                        </p>
                      </section>
                    </section>
                    </SwiperSlide>
                  )}
                  </Swiper>
             </section>
            </div>
        </div>
      </div>
      )
}