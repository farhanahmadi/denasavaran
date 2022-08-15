import React, { useContext, useEffect, useState } from "react";

//import context
import { cartContext } from "../context/CartContextProvider";

//import components
import { quantityCheck } from "../context/quantityHandler";
import { persianNumber } from "../function/PersianNumber";

//import styles
import styles from "./cart.module.css";

export default function Cart() {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <section className={styles.productDetails}>
        <section className={styles.header}>
          <span className={styles.headerTitle}>سبد خرید شما</span>
          <span className={styles.headerQuantity}>
            {persianNumber(
              state.products.reduce(
                (total, products) => total + products.quantity,
                0
              )
            )}{" "}
            کالا
          </span>
        </section>
        <section className={styles.products}>
          {state.products.map((item) => (
            <React.Fragment key={item.id}>
              <section key={item.id} className={styles.productItem}>
                <section className={styles.image}>
                  <img src={item.image} alt={item.name} />
                  <section className={styles.quantityContainer}>
                    <span
                      onClick={() =>
                        dispatch({
                          type: "INCREASE",
                          payload: item,
                        })
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
                    <span className={styles.quantityNumber}>
                      {quantityCheck(state.products, item.id)
                        ? quantityCheck(state.products, item.id)
                        : 1}
                    </span>
                    {quantityCheck(state.products, item.id) ? (
                      <span
                        onClick={() =>
                          dispatch({
                            type: "DECREASE",
                            payload: item,
                          })
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
                        onClick={() => {
                          dispatch({
                            type: "REMOVEITEM",
                            payload: item,
                          });
                        }}
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
                  </section>
                </section>
                <section className={styles.details}>
                  <h1 className={styles.name}>{item.name}</h1>
                  <section className={styles.colorSection}>
                    <span
                      style={{
                        backgroundColor: item.colors,
                        border: `1px solid ${item.colors}`,
                      }}
                      className={styles.color}
                    ></span>
                    <span className={styles.colorText}>رنگ انتخاب شده</span>
                  </section>
                  <section className={styles.garanty}>
                    <i
                      style={{ color: "#0E6655" }}
                      className="fas fa-shield-check"
                    ></i>{" "}
                    گارانتی اصالت و سلامت فیزیکی کالا
                  </section>
                  <section className={styles.seller}>
                    <i
                      style={{ color: "#3498DB" }}
                      className="fas fa-store-alt"
                    ></i>{" "}
                    {item.manufacturer_company}
                  </section>
                  <section className={styles.price}>
                    {item.discount_percent
                      ? item.price_after_discount
                      : item.price}{" "}
                    تومان
                  </section>
                </section>
              </section>
              <hr style={{ backgroundColor: "#d3d7dd" }} />
            </React.Fragment>
          ))}
        </section>
      </section>
      <section className={styles.paymentDetails}>
        <section className={styles.ContinueShopping}>
          <section className={styles.quantitySection}>
            <span className={styles.paymentQuantityText}>تعداد کالاها :</span>
            <span className={styles.paymentQuantityNumber}>
              {persianNumber(
                state.products.reduce(
                  (total, products) => total + products.quantity,
                  0
                )
              )}
            </span>
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
            <button className={styles.buyBtn}>ادامه</button>
          </section>
        </section>
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
          <span className={styles.fixedPriceNumber}>
            {state.products.reduce(
              (total, products) =>
                total +
                products.quantity *
                  (products.discount_percent
                    ? products.price_after_discount
                    : products.price),
              0
            )}{" "}
            تومان
          </span>
        </section>
        <section className={styles.fixedBuyBtnSection}>
          <button className={styles.fixedbuyBtn}>ادامه</button>
        </section>
      </section>
    </div>
  );
}
