import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//?import icons
import { HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi/index";

//import context
import { cartContext } from "../context/CartContextProvider";
import { quantityCheck } from "../context/quantityHandler";

import styles from "./navbarCartHover.module.css";
import { persianNumber } from "../function/PersianNumber";

const NavbarCartHover = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <span>
          {persianNumber(
            state.products.reduce(
              (total, products) => total + products.quantity,
              0
            )
          )}{" "}
          کالا
        </span>
        <Link href={`/cart`}>
          <a>
            مشاهده سبد خرید <i className="fas fa-angle-left"></i>
          </a>
        </Link>
      </section>
      <section
        className={`${
          !state.products.length
            ? styles.emptyProductContainer
            : styles.productContainer
        }`}
      >
        {!state.products.length ? (
          <section className={styles.emptyCart}>
            <img src="/assets/images/empty-cart.svg" alt="empty-cart" />
            <h2>سبد خرید شما خالی است !</h2>
          </section>
        ) : (
          state.products.map((item) => (
            <React.Fragment key={item.id}>
              <section key={item.id} className={styles.product}>
                <div className={styles.image}>
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
                      <HiPlus color="var(--red)" className="icon" />
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
                        <HiMinus color="var(--red)" className="icon" />
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
                        <HiOutlineTrash color="var(--red)" className="icon" />
                      </span>
                    )}
                  </section>
                </div>
                <div className={styles.details}>
                  <h1 className={styles.name}>{item.name}</h1>
                  <section className={styles.colorSection}>
                    <span
                      style={{
                        backgroundColor: item.colors,
                        border: `1px solid ${item.colors}`,
                      }}
                      className={styles.color}
                    ></span>
                    <span className={styles.colorText}>{item.color}</span>
                  </section>
                  <span className={styles.seller}>
                    <i
                      style={{ color: "#10bfd3" }}
                      className="fas fa-store-alt"
                    ></i>{" "}
                    {item.manufacturer_company}
                  </span>
                  <span className={styles.price}>
                    {item.discount_percent
                      ? item.price_after_discount
                      : item.price}{" "}
                    تومان
                  </span>
                </div>
              </section>
              <hr style={{ backgroundColor: "#dddddd" }} />
            </React.Fragment>
          ))
        )}
      </section>
      <section className={styles.footer}>
        <section className={styles.totalPriceSection}>
          <span className={styles.totalPriceText}>مبلغ قابل پرداخت</span>
          <section className={styles.priceSection}>
            <span className={styles.price}>
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
              )}
            </span>
            <span> تومان</span>
          </section>
        </section>
        <button className={state.products.length ? styles.buyBtn : styles.disabledBtn } disabled={state.products.length ? false : true } >ادامه فرایند خرید</button>
      </section>
    </div>
  );
};

export default NavbarCartHover;
