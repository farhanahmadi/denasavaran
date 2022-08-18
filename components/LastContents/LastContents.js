import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";
import { Card, Button } from "react-bootstrap";
import React from "react";
import Image from "next/image";

//import styles
import styles from "./LastContents.module.css";

import SwiperCore from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function LastContents({ lastProducts }) {
  return (
    <div className={styles.container}>
      <div className={styles.lg}>
        <section className={styles.sliderHeader}>
          <h3>آخــریــن مــحــصــولــات</h3>
        </section>
        <div className={styles.sliderContainer}>
          <section className={styles.slider}>
            <Swiper
              dir="rtl"
              slidesPerView={"auto"}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={false}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className={styles.mySwiper}
            >
              <SwiperSlide style={{ width: "182px" }}>
                <section className={styles.offerSection}>
                  <img
                    className={styles.offerImageSvg}
                    src="/assets/images/offer.svg"
                    alt="offerSvg"
                  />
                  <img
                    className={styles.offerImage}
                    src="/assets/images/offer.png"
                    alt="offer"
                  />
                  <button className={styles.more}>{"مشاهده همه >"}</button>
                </section>
              </SwiperSlide>
              {lastProducts.map((item) => (
                <SwiperSlide key={item.id} className={styles.swiperSlider}>
                  <section className={styles.card}>
                    <section className={styles.cardImg}>
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width={172}
                        height={172}
                      />
                    </section>
                    <section className={styles.cardName}>
                      <h1>{item.name}</h1>
                    </section>
                    <section className={styles.cardText}>
                      <p className={styles.discountPrice}>
                        {item.price_after_discount
                          ? item.price_after_discount
                          : item.price}
                      </p>
                      <p
                        className={
                          item.discount_percent ? styles.discountPercent : ""
                        }
                      >
                        <span className={styles.spanPercent}>
                          <span style={{ marginTop: "2px" }}>
                            {item.discount_percent ? item.discount_percent : ""}
                          </span>
                          {item.discount_percent ? (
                            <span className={styles.percentIcon}>%</span>
                          ) : (
                            ""
                          )}
                        </span>
                      </p>
                    </section>
                    <section>
                      <p className={styles.mainPrice}>
                        {item.price_after_discount ? item.price : ""}
                      </p>
                    </section>
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>
    </div>
  );
}
