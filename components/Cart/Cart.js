import React from "react";

//import styles
import styles from "./cart.module.css";

export default function Cart() {
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
      <section className={styles.productDetails}>
        <section className={styles.header}>
          <span className={styles.headerTitle}>سبد خرید شما</span>
          <span className={styles.headerQuantity}>۳ کالا</span>
        </section>
        <section className={styles.products}>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <section key={item.id} className={styles.productItem}>
                <section className={styles.image}>
                  <img src={item.image} alt={item.name} />
                  <section className={styles.quantityContainer}>
                    <span className={styles.pluse}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        style={{
                          stroke: "#EF233C",
                          width: "18px",
                          height: "18px",
                        }}
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
                        style={{
                          stroke: "#EF233C",
                          width: "18px",
                          height: "18px",
                        }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </section>
                </section>
                <section className={styles.details}>
                  <h1 className={styles.name}>{item.name}</h1>
                  <section className={styles.colorSection}>
                    <span className={styles.color}></span>
                    <span className={styles.colorText}>{item.color}</span>
                  </section>
                  <section className={styles.garanty}>
                    <i className="fas fa-shield-check"></i> گارانتی اصالت و
                    سلامت فیزیکی کالا
                  </section>
                  <section className={styles.seller}>
                    <i className="fas fa-store-alt"></i> لوازم یدکی احمدی
                  </section>
                  <section className={styles.price}>۴۶۰,۰۰۰ تومان</section>
                </section>
              </section>
              <hr style={{ backgroundColor: "#d3d7dd" }} />
            </React.Fragment>
          ))}
        </section>
      </section>
      <section className={styles.paymentDetails}></section>
    </div>
  );
}
