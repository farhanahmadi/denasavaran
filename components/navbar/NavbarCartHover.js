import React from "react";

import styles from "./navbarCartHover.module.css";

const NavbarCartHover = () => {
  const data = [
    {
      id: 1,
      name: "روغن موتور هیوندایی",
      image: "/assets/images/oil.png",
      color: "قرمز",
      seller: "لوازم یدکی احمدی",
      price: "۶۵۰۰۰۰",
    },
    {
      id: 2,
      name: "روغن موتور هیوندایی",
      image: "/assets/images/oil.png",
      color: "قرمز",
      seller: "لوازم یدکی احمدی",
      price: "۶۵۰۰۰۰",
    },
    {
      id: 3,
      name: "روغن موتور هیوندایی",
      image: "/assets/images/oil.png",
      color: "قرمز",
      seller: "لوازم یدکی احمدی",
      price: "۶۵۰۰۰۰",
    },
  ];
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <span>1 کالا</span>
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
                  <span className={styles.pluse}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      style={{ stroke: "#EF233C" , width: '18px' , height: '18px' }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                  <span className={styles.quantityNumber}>1</span>
                  <span className={styles.minuse}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      style={{ stroke: "#EF233C" , width: '18px' , height: '18px' }}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                </section>
              </div>
              <div className={styles.details}>
                <h1 className={styles.name}>{item.name}</h1>
                <section className={styles.colorSection}>
                  <span className={styles.color}></span>
                  <span className={styles.colorText}>{item.color}</span>
                </section>
                <span className={styles.seller}>
                  <i
                    style={{ color: "#10bfd3" }}
                    className="fas fa-store-alt"
                  ></i>{" "}
                  {item.seller}
                </span>
                <span className={styles.price}>{item.price} تومان</span>
              </div>
            </section>
            <hr style={{ backgroundColor: "#dddddd" }} />
          </React.Fragment>
        ))}
      </section>
      <section className={styles.footer}>
        <section className={styles.totalPriceSection}>
          <span className={styles.totalPriceText}>مبلغ قابل پرداخت</span>
          <span className={styles.totalPrice}>۴۶۰,۰۰۰ تومان</span>
        </section>
        <button className={styles.buyBtn}>ادامه فرایند خرید</button>
      </section>
    </div>
  );
};

export default NavbarCartHover;
