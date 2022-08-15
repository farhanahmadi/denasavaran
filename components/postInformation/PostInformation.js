import React,{useContext} from "react";

//import styles
import styles from "./postInformation.module.css";

//import context
import { cartContext } from "../context/CartContextProvider";

//import components
import { quantityCheck } from "../context/quantityHandler";
import { persianNumber } from "../function/PersianNumber";

export default function PostInformation() {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <section className={styles.status}>
        <h1 className={styles.name}>دنــا ســواران ارومــیه</h1>
        <section className={styles.details}>
          <span className={styles.cart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth="2"
              style={{
                transform: "rotateY(180deg)",
                width: "20px",
                stroke: "#EF233C",
                opacity: ".8",
              }}
            >
              <path
                // strokeLinecap="round"
                // strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h5 className={styles.statusH5}>سبد خرید</h5>
          </span>
          <span className={styles.post}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth="2"
              style={{
                transform: "rotateY(180deg)",
                width: "35px",
                stroke: "#EF233C",
              }}
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                // strokeLinecap="round"
                // strokeLinejoin="round"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <h5 className={styles.statusH5}>اطلاعات ارسال</h5>
          </span>
          <span className={styles.payment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth="2"
              style={{
                transform: "rotateY(180deg)",
                width: "20px",
                stroke: "#81858b",
                opacity: ".8",
              }}
            >
              <path
                // strokeLinecap="round"
                // strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <h5 className={styles.statusH5}>پرداخت</h5>
          </span>
        </section>
      </section>
      <section className={styles.userDetails}>
        <section className={styles.inputs}>
          <section className={styles.username}>
            <label>نام گیرنده :</label>
            <input name="name" type="text" placeholder="نام گیرنده" />
          </section>
          <section className={styles.lastname}>
            <label>نام خانوادگی گیرنده :</label>
            <input
              name="lastName"
              type="text"
              placeholder="نام خانوادگی گیرنده"
            />
          </section>
          <section className={styles.address}>
            <label>آدرس :</label>
            <input name="address" type="text" placeholder="آدرس" />
          </section>
          <section className={styles.plate}>
            <label>پلاک :</label>
            <input name="plate" type="text" placeholder="پلاک" />
          </section>
          <section className={styles.zipcode}>
            <label>کد پستی :</label>
            <input name="zipcode" type="text" placeholder="کد پستی" />
          </section>
          <section className={styles.phone}>
            <label>شماره همراه :</label>
            <input name="phone" type="text" placeholder="شماره همراه" />
          </section>
        </section>
        <hr className={styles.line} />
        <section className={styles.paymentDetails}>
          <section className={styles.ContinueShopping}>
            <section className={styles.quantitySection}>
              <span className={styles.paymentQuantityText}>تعداد کالاها :</span>
              <span className={styles.paymentQuantityNumber}>{persianNumber(state.products.reduce((total , products) => total + products.quantity , 0))}</span>
            </section>
            <section className={styles.toalSection}>
              <span className={styles.totalText}>جمع سبد خرید :</span>
              <span className={styles.totalNumber}>
                {persianNumber(
                  state.products.reduce(
                    (total, products) =>
                      total +
                      products.quantity *
                        (products.discount_percent
                          ? products.price_after_discount
                          : products.price),
                    0
                  )
                )}{" "}
                تومان
              </span>
            </section>
            <p className={styles.sendPrice}>
              هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
              می‌شود
            </p>
            <section className={styles.buyBtnSection}>
              <button className={styles.buyBtn}>پرداخت</button>
            </section>
          </section>
          <hr className={styles.line} />
          <section className={styles.freeSend}>
            <section className={styles.freeSendHeader}>
              <h2>ارسال رایگان</h2>
              <p>برای سفارش‌ بالای ۵۰۰ هزار تومان</p>
            </section>
            <section className={styles.freeSendImg}>
              <img src="/assets/images/sendCar.svg" alt="send" />
            </section>
          </section>
        </section>
        <section className={styles.fixedCart}>
          <section className={styles.fixedPriceSection}>
            <span className={styles.fixedPriceText}>جمع سبد خرید</span>
            <span className={styles.fixedPriceNumber}>۴۹۵,۴۶۰ تومان</span>
          </section>
          <section className={styles.fixedBuyBtnSection}>
            <button className={styles.fixedbuyBtn}>ادامه</button>
          </section>
        </section>
      </section>
    </div>
  );
}
