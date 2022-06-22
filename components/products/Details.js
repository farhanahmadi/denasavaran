<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 77daa4cd56e954474df303df4faff5a744b80e7d
import { Col, Row } from "react-bootstrap";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";

//import context
import { cartContext } from "../context/CartContextProvider";

//import styles
import styles from "./details.module.css";

const Details = ({ productDetails }) => {
  const data = ["1", "2"];
<<<<<<< HEAD
  const {state , dispatch} = useContext(cartContext);
=======
>>>>>>> 77daa4cd56e954474df303df4faff5a744b80e7d
  const [activeImage, setActiveImage] = useState();
  const [image, setImage] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setImage([productDetails.image]);
    productDetails.image2 &&
      setImage((prevstate) => [...prevstate, productDetails.image2]);
    productDetails.image3 &&
      setImage((prevstate) => [...prevstate, productDetails.image3]);
    setColors(productDetails.colors.split("-"));
  }, [activeImage]);

  const imageSelectedHandler = (src) => {
    setActiveImage(src);
  };
  return (
    <Row dir="rtl" style={{ margin: "5% auto", width: "98%" }}>
      {console.log(state)}
      <Col xl={3} lg={3} md={12}>
        <div className={styles.imageContainer}>
          <img
            className={styles.swiperImage}
            src={activeImage ? activeImage : productDetails.image}
            alt={productDetails.name}
          />
        </div>
        <section className={styles.swiperContainer}>
          <Swiper
            dir="rtl"
            slidesPerView={image.length}
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
            {image.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiperSlider}>
                <img
                  className={styles.swiperImage}
                  src={item}
                  alt={productDetails.name}
                  onClick={() => imageSelectedHandler(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Col>
      <Col xl={9} lg={9} md={12}>
        <h1 className={styles.title}>{productDetails.name}</h1>
        <hr className={styles.titleLine} />
        <Row>
          <Col xl={7} lg={7} md={12}>
            <p className={styles.description}>{productDetails.descreption}</p>
            <h3 className={styles.colorTitle}>رنگ ها :</h3>
            <section className={styles.colorContainer}>
              {colors.map((color) => (
                <div key={color} className={styles.colorParent}>
                  <span className={styles.color} style={{backgroundColor: color}}></span>
                </div>
              ))}
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
                  <i className="fas fa-store-alt"></i>{" "}
                  {productDetails.manufacturer_company}
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
                {productDetails.discount_percent ? (
                  <p className={styles.discountPercent}>
                    {productDetails.discount_percent}%
                  </p>
                ) : (
                  ""
                )}
                {productDetails.discount_percent ? (
                  <h2 className={styles.priceText}>
                    {productDetails.price_after_discount}
                  </h2>
                ) : (
                  <h2 className={styles.priceText}>{productDetails.price}</h2>
                )}
              </section>
              <section className={styles.priceBeforeDiscountContainer}>
                {productDetails.discount_percent ? (
                  <p className={styles.priceBeforeDiscount}>
                    {productDetails.price}
                  </p>
                ) : (
                  ""
                )}
              </section>
              <section className={styles.buyBtn}>
                <button onClick={() => dispatch({type: "ADDITEM" , payload: productDetails})} className={styles.Btn}>خرید</button>
              </section>
            </section>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Details;
