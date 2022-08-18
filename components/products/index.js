import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//import styles
import styles from "./products.module.css";

//import components
import ProductsSkeleton from "../SkeletonLoading/ProductsSkeleton";
import ReactPaginate from "react-paginate";
import { Pagination } from "@mui/material";
import { cartContext } from "../context/CartContextProvider";
import { persianNumber } from "../function/PersianNumber";
import SideBarFilter from "../Filter/SideBarFilter";
import { useFilter } from "../context/FilterContextProvider";

//import icons
import { HiOutlineBookmark, HiChevronDown } from "react-icons/hi/index";
import { BsShop, BsPatchCheck } from "react-icons/bs/index";

const index = ({
  products,
  tagsFilterSideBar,
  categoriesFilterSideBar,
  filterHandler,
}) => {
  const router = useRouter();

  const currentPage = Number(router.query.page);
  const pageCount = Math.round(products.count / 20);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  const paginationHandler = (event, page) => {
    router.query.page = page;
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

  return (
    <div className={styles.container}>
      <SideBarFilter
        load={load}
        tagsFilterSideBar={tagsFilterSideBar}
        categoriesFilterSideBar={categoriesFilterSideBar}
        filterHandler={filterHandler}
      />
      <section className={styles.mainContainer}>
        <section className={styles.main}>
          {load
            ? products.results.map((item) => (
                <section key={item.id} className={styles.card}>
                  <section className={styles.save}>
                    <HiOutlineBookmark
                      style={{ stroke: "var(--red)" }}
                      className="saveIcon"
                    />
                  </section>
                  <Link
                    href={`/product/name=${item.slug}?id=${item.id}`}
                    passHref
                  >
                    <a style={{ all: "unset" }}>
                      <section className={styles.productsContainer}>
                        <section className={styles.image}>
                          <img
                            className={styles.productImage}
                            src="/assets/images/product.jpg"
                            alt="products"
                          />
                          <section className={styles.imageSectionText}>
                            <h1 className={styles.imageSectionTitleText}>
                              {item.name}
                            </h1>
                            <p className={styles.seller}>
                              <BsShop
                                style={{
                                  color: "var(--skyBlue)",
                                  width: "14px",
                                  height: "14px",
                                  marginLeft: "3px",
                                }}
                              />
                              فروشنده : {item.manufacturer_company}
                            </p>
                          </section>
                        </section>
                        <section className={styles.title}>
                          <h1 className={styles.titleText}>{item.name}</h1>
                          <p className={styles.seller}>
                            <BsShop
                              style={{ color: "var(--skyBlue)" }}
                              className="icon"
                            />
                            فروشنده : {item.manufacturer_company}
                          </p>
                          <p className={styles.warranty}>
                            <BsPatchCheck
                              style={{ color: "var(--green)" }}
                              className="icon"
                            />
                            گارانتی اصالت و سلامت فیزیکی کالا
                          </p>
                        </section>
                        <section
                          className={`${styles.priceContainer}
                            ${
                              item.discountPercent
                                ? styles.price
                                : styles.priceNoDiscount
                            }`}
                        >
                          <h4 className={styles.mainPrice}>
                            {item.discount_percent
                              ? persianNumber(item.price_after_discount)
                              : persianNumber(item.price)}{" "}
                            تومان
                          </h4>
                          {item.discount_percent ? (
                            <p className={styles.discountPercent}>
                              {persianNumber(item.discount_percent) + "%"}
                            </p>
                          ) : (
                            ""
                          )}
                        </section>
                        {item.discount_percent ? (
                          <p className={styles.priceBeforeDiscount}>
                            {persianNumber(item.price)}
                          </p>
                        ) : (
                          ""
                        )}
                      </section>
                    </a>
                  </Link>
                  <hr className={styles.headerLine} />
                </section>
              ))
            : products.results.map((item, index) => (
                <React.Fragment key={index}>
                  <ProductsSkeleton />
                </React.Fragment>
              ))}
        </section>
        {pageCount ? (
          <div className={styles.pagination}>
            <Pagination
              count={pageCount}
              page={currentPage || 1}
              onChange={paginationHandler}
              color="primary"
            />
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default index;
