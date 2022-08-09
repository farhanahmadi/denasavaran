import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//import styles
import styles from "./products.module.css";

//import components
import ProductsSkeleton from "../SkeletonLoading/ProductsSkeleton";
import ReactPaginate from "react-paginate";
import { cartContext } from "../context/CartContextProvider";
import { persianNumber } from "../function/PersianNumber";

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
  const { tags__in, categories } = router.query;
  const paginationNumber = router.query.page;

  const pageCount = Math.round(products.count / 2);
  const [load, setLoad] = useState(false);

  //state of filters
  const [tagsState, setTagsState] = useState([]);
  const [categoriesState, setCategoriesState] = useState([]);

  //context
  const { state, dispatch } = useContext(cartContext);

  useEffect(() => {
    tags__in && setTagsState(tags__in);
    categories && setCategoriesState(categories);
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  const handlePageClick = (event) => {
    const page = event.selected ? event.selected + 1 : 1;
    router.query.page = page;
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };
  
  const tagHandler = async (event) => {
    if (event.target.checked) {
      setTagsState((prevstate) => [...prevstate, event.target.value]);
      router.query.tags__in = [...tagsState, event.target.value];
    } else {
      const tagIndex = tagsState.indexOf(event.target.value);
      tagsState.splice(tagIndex, 1);
      router.query.tags__in = tagsState;
    }
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

  const filterCategoryHandler = (event) => {
    if (event.target.checked) {
      setCategoriesState((prevstate) => [...prevstate, event.target.value]);
      router.query.categories = [...categoriesState, event.target.value];
    } else {
      const categoriesIndex = categoriesState.indexOf(event.target.value);
      categoriesState.splice(categoriesIndex, 1);
      router.query.categories = categoriesState;
    }
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

  return (
    <div className={styles.container}>
      <section className={load ? styles.sideBar : styles.skeletonSidebar}>
        <br />
        <div className={styles.filterText}>
          <i
            style={{ color: "#EF233C" }}
            className="fas fa-sort-amount-down"
          ></i>{" "}
          فیلتر بر اساس نوع ماشین
        </div>
        <ul className={styles.carFilter}>
          {tagsFilterSideBar.map((tag) => (
            <li key={tag.id}>
              <label className={styles.Filtercontainer}>
                {tag.name}
                <input
                  value={tag.id}
                  type="checkbox"
                  readOnly
                  onClick={tagHandler}
                  checked={
                    tagsState && tagsState.indexOf(tag.id.toString()) >= 0
                      ? true
                      : false
                  }
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))}
        </ul>
        {/* ////////////// */}
        <div className={styles.filterText}>
          <i
            style={{ color: "#EF233C" }}
            className="fas fa-sort-amount-down"
          ></i>{" "}
          فیلتر بر اساس نوع قطعه
        </div>
        <ul className={styles.carFilter}>
          {categoriesFilterSideBar.map((category) => (
            <li key={category.id}>
              <label className={styles.Filtercontainer}>
                {category.name}
                <input
                  value={category.id}
                  type="checkbox"
                  onClick={filterCategoryHandler}
                  readOnly
                  checked={
                    categoriesState &&
                    categoriesState.indexOf(category.id.toString()) >= 0
                      ? true
                      : false
                  }
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.categoryContainer}>
        <section className={styles.dropdown}>
          <button onClick={filterHandler} className={styles.filter}>
            فیلتر{" "}
            <HiChevronDown
              style={{ stroke: "var(--lightBlack)" }}
              className="icon"
            />
          </button>
          <button className={styles.categoryDropdown}>
            دسته بندی{" "}
            <HiChevronDown
              style={{ stroke: "var(--lightBlack)" }}
              className="icon"
            />
          </button>
        </section>
      </section>
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
                              {persianNumber(item.discount_percent)}
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
            : tagsFilterSideBar.map((item, index) => (
                <div key={index}>
                  <ProductsSkeleton />
                </div>
              ))}
        </section>
        <div className="pagination">
          <ReactPaginate
            nextLabel="بعدی >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            forcePage={router.query.page ? Number(paginationNumber - 1) : 0}
            previousLabel="< قبلی"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </section>
    </div>
  );
};

export default index;
