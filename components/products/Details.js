import React, { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";

// ?import components
import { persianNumber } from "../function/PersianNumber";

//?import icons
import { BsCheck, BsShop, BsShieldCheck } from "react-icons/bs/index";
import { HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi/index";
import {AiOutlineCheck} from "react-icons/ai/index"
import {FaDollarSign} from "react-icons/fa/index"
import {RiErrorWarningLine} from "react-icons/ri/index"

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
  const productHandler = (product, color) => {
    const selectedProduct = product;
    selectedProduct.colors = color;
    setSelectedColor(color);
    setSelectedItem(selectedProduct);
  };
  return (
    <Row dir="rtl" style={{ margin: "5% auto", width: "98%" }}>
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
                    onClick={() => productHandler(productDetails, color)}
                    className={styles.color}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color ? (
                      <BsCheck color="white" className="icon" />
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
               <RiErrorWarningLine className="icon" style={{margin: 0}} /> امکان برگشت کالا
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
                  <BsShop color="var(--red)" className="icon" />
                  {productDetails.manufacturer_company}
                </p>
              </section>
              <hr />
              <section className={styles.garanty}>
                <p className={styles.garantyText}>
                  <BsShieldCheck color="var(--green)" className="icon" />{" "}
                  گارانتی اصالت و سلامت فیزیکی کالا
                </p>
              </section>
              <hr />
              <section className={styles.checking}>
                <p className={styles.checkingText}>
                  <AiOutlineCheck color="var(--green)" className="icon" /> موجود در
                  انبار
                </p>
              </section>
              <hr />
              <p className={styles.sellerPrice}>
               <FaDollarSign color="var(--red)" className="icon" style={{margin: 0}} /> قیمت فروشنده :
              </p>
              <section dir="rtl" className={styles.price}>
                {productDetails.discount_percent ? (
                  <p className={styles.discountPercent}>
                    {persianNumber(productDetails.discount_percent)}%
                  </p>
                ) : (
                  ""
                )}
                {productDetails.discount_percent ? (
                  <h2 className={styles.priceText}>
                    <div className={styles.priceSection}>
                      {persianNumber(productDetails.price_after_discount)}
                      <span>تومان</span>
                    </div>
                  </h2>
                ) : (
                  <div className={styles.priceSection}>
                    <h2 className={styles.priceText}>
                      {persianNumber(productDetails.price)}
                    </h2>
                    <span>تومان</span>
                  </div>
                )}
              </section>
              <section className={styles.priceBeforeDiscountContainer}>
                {productDetails.discount_percent ? (
                  <p className={styles.priceBeforeDiscount}>
                    <div className={styles.priceSection}>
                      {persianNumber(productDetails.price)}
                      <span>تومان</span>
                    </div>
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
                      <HiMinus color="var(--red)" className="icon" />
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
                      <HiOutlineTrash color="var(--red)" className="icon" />
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
                    <HiPlus color="var(--red)" className="icon" />
                  </span>
                </section>
              ) : (
                <section className={styles.buyBtn}>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADDITEM", payload: selectedItem })
                    }
                    className={`${
                      !!selectedColor ? styles.activeBtn : styles.disabledBtn
                    }`}
                    disabled={!!!selectedColor}
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
