import React from "react";
import { Col, Row } from "react-bootstrap";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";

//import styles
import styles from "./details.module.css";

const Details = () => {
  const data = ["1", "2", "3", "4"];
  return (
    <Row dir="rtl" style={{ margin: "5% auto", width: "98%" }}>
      <Col xl={3} lg={3} md={12}>
        <div className={styles.imageContainer}></div>
        <section className={styles.swiperContainer}>
          <Swiper
            dir="rtl"
            slidesPerView={3}
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
            {data.map((item) => (
              <SwiperSlide key={item.id} className={styles.swiperSlider}>
                <img
                  className={styles.swiperImage}
                  src="/assets/images/card1.jpg"
                  alt="product"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Col>
      <Col xl={9} lg={9} md={12}>
        <h1 className={styles.title}>
          صفحه کلاج اورجینال پژو والوو تقویت یافته
        </h1>
        <hr className={styles.titleLine} />
        <Row>
          <Col xl={7} lg={7} md={12}>
            <p className={styles.description}>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم
              ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون
              معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی
              و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای
              پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.
            </p>
            <h3 className={styles.colorTitle}>رنگ ها :</h3>
            <section className={styles.colorContainer}>
              <div className={styles.colorParent}>
                <span className={styles.color}> </span>
              </div>
              <div className={styles.colorParent}>
                <span className={styles.color}> </span>
              </div>
              <div className={styles.colorParent}>
                <span className={styles.color}> </span>
              </div>
            </section>
            <section className={styles.properties}>
              <h3 className={styles.propertiesTitle}>ویژگی ها :</h3>
              <ul className={styles.propertiesList}>
                <li>
                  <span className={styles.propertiesListTitle}>نوع اتصال </span>{" "}
                  : بی‌سیم
                </li>
                <li>
                  <span className={styles.propertiesListTitle}> رابط ها</span> :
                  لایتنینگ
                </li>
                <li>
                  <span className={styles.propertiesListTitle}> رابط ها</span> :
                  لایتنینگ
                </li>
              </ul>
            </section>
            <hr style={{ backgroundColor: "#B1B1B1" }} />
            <section className={styles.return}>
              <p className={styles.returnText}>
                <i className="fas fa-exclamation-circle"></i> امکان برگشت کالا
                در گروه هدفون، هدست و هندزفری با دلیل "انصراف از خرید" تنها در
                صورتی مورد قبول است که پلمب کالا باز نشده باشد.
              </p>
            </section>
            <section className={styles.sendNotice}>
              <section className={styles.sendNoticeText}>
                <h2 className={styles.sendNoticeTitle}>ارسال رایگان</h2>
                <p className={styles.sendNoticeDescription}>
                  برای سفارش‌ بالای ۵۰۰ هزار تومان
                </p>
              </section>
              <section className={styles.sendNoticeImage}>
                <img src="/assets/images/sendCar.svg" alt="send" />
              </section>
            </section>
          </Col>
          <Col dir="ltr" xl={5} lg={5} md={12}>
            <section className={styles.priceBox}>
              <section className={styles.seller}>
                <h2 className={styles.sellerTitle}>فروشنده : </h2>
                <p className={styles.sellerDescription}>
                  <i className="fas fa-store-alt"></i> لوازم یدکی احمدی
                </p>
              </section>
              <hr />
              <section className={styles.garanty}>
                <p className={styles.garantyText}>
                  <i className="fas fa-shield-check"></i> گارانتی اصالت و سلامت
                  فیزیکی کالا
                </p>
              </section>
              <hr />
              <section className={styles.checking}>
                <p className={styles.checkingText}>
                  <i className="fas fa-check"></i> موجود در انبار
                </p>
              </section>
              <hr />
              <p className={styles.sellerPrice}>
                <i className="fas fa-dollar-sign"></i> قیمت فروشنده :
              </p>
              <section className={styles.price}>
                <p className={styles.discountPercent}>۱۰%</p>
                <h2 className={styles.priceText}>۱۰۶,۲۰۰</h2>
              </section>
              <section className={styles.priceBeforeDiscountContainer}>
                <p className={styles.priceBeforeDiscount}>۱۶۶,۲۰۰</p>
              </section>
              <section className={styles.buyBtn}>
                <button className={styles.Btn}>خرید</button>
              </section>
            </section>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Details;
