import React, { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";

//import context
import { cartContext } from "../context/CartContextProvider";
import { isEmpty, quantityCheck } from "../context/quantityHandler";

//import styles
import styles from "./details.module.css";

const Details = ({ productDetails }) => {
  const data = ["1", "2"];
  const { state, dispatch } = useContext(cartContext);
  const [selectedItem, setSelectedItem] = useState([]);
  const [activeImage, setActiveImage] = useState();
  const [image, setImage] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
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
  const productHandler = (product , color) => {
    const selectedProduct = product;
    selectedProduct.colors = color;
    setSelectedColor(color);
    setSelectedItem(selectedProduct);
  }
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
                <div
                  key={color}
                  style={{ border: `1px solid ${color}` }}
                  className={styles.colorParent}
                >
                  <span
                    onClick={() => productHandler(productDetails , color)}
                    className={styles.color}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </span>
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
              <section dir="rtl" className={styles.price}>
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
              {isEmpty(state.products, productDetails.id) ? (
                <section dir="ltr" className={styles.quantityContainer}>
                  {quantityCheck(state.products, productDetails.id) ? (
                    <span
                      onClick={() =>
                        dispatch({ type: "DECREASE", payload: productDetails })
                      }
                      className={styles.minuse}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        // strokeWidth="2"
                        style={{
                          stroke: "#EF233C",
                          width: "18px",
                          height: "18px",
                        }}
                      >
                        <path
                          // strokeLinecap="round"
                          // strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span
                      onClick={() =>
                        dispatch({
                          type: "REMOVEITEM",
                          payload: productDetails,
                        })
                      }
                      className={styles.trash}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{
                          stroke: "#EF233C",
                          width: "18px",
                          height: "18px",
                        }}
                      >
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </span>
                  )}
                  <span className={styles.quantityNumber}>
                    {quantityCheck(state.products, productDetails.id)
                      ? quantityCheck(state.products, productDetails.id)
                      : 1}
                  </span>
                  <span
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: productDetails })
                    }
                    className={styles.pluse}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      // strokeWidth="2"
                      style={{
                        stroke: "#EF233C",
                        width: "18px",
                        height: "18px",
                      }}
                    >
                      <path
                        // strokeLinecap="round"
                        // strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </section>
              ) : (
                <section className={styles.buyBtn}>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADDITEM", payload: selectedItem })
                    }
                    className={styles.Btn}
                  >
                    خرید
                  </button>
                </section>
              )}
            </section>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Details;
