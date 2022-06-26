import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

//import context
import { cartContext } from "../context/CartContextProvider";
import { quantityCheck } from "../context/quantityHandler";

import styles from "./navbarCartHover.module.css";

const NavbarCartHover = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(cartContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(state.products);
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <span>{data.reduce((total , products) => total + products.quantity , 0)} کالا</span>
        <a>
          مشاهده سبد خرید <i className="fas fa-angle-left"></i>
        </a>
      </section>
      <section className={styles.productContainer}>
        {data.map((item) => (
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
                    {quantityCheck(data, item.id)
                      ? quantityCheck(data, item.id)
                      : 1}
                  </span>
                  {quantityCheck(data, item.id) ? (
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
                      onClick={() =>
                        {dispatch({
                          type: "REMOVEITEM",
                          payload: item,
                        }) ; setData(state.products)}
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
        ))}
      </section>
      <section className={styles.footer}>
        <section className={styles.totalPriceSection}>
          <span className={styles.totalPriceText}>مبلغ قابل پرداخت</span>
          <span className={styles.totalPrice}>{data.reduce((total , products) => total + products.quantity * (products.discount_percent ? products.price_after_discount : products.price) , 0 )} تومان</span>
        </section>
        <button className={styles.buyBtn}>ادامه فرایند خرید</button>
      </section>
    </div>
  );
};

export default NavbarCartHover;
