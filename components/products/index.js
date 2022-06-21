import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//import styles
import styles from "./products.module.css";

//import components
import ProductsSkeleton from "../SkeletonLoading/ProductsSkeleton";
import ReactPaginate from "react-paginate";
import {
  categoriesArrayHandler,
  categoriesArrayUrlHandler,
  emptyCategoryFilter,
  emptyTagFilter,
  tagArrayHandler,
  tagArrayUrlHandler,
  UrlHandler,
  removePage,
  UrlHandlerWithPage,
} from "./pagerouter";

//bootstarp
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";

const index = ({ products, tags, categories }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const router = useRouter();
  const paginationNumber = router.query.page;

  const pageCount = Math.round(products.count / 2);
  const [activeSort, setActiveSort] = useState("all");
  const [load, setLoad] = useState(false);
  //filter
  const [tagsState, setTagsState] = useState([]);
  const [categoriesState, setCategoriesState] = useState([]);

  const categoryHandler = (event) => {
    if (event.target.innerText !== "همه مقالات") {
      setActiveSort(event.target.innerText);
    } else {
      setActiveSort("all");
    }
  };

  useEffect(() => {
    !load &&
      router.query.tags__in &&
      setTagsState([...new Set(router.query.tags__in.split(","))]);
    !load &&
      router.query.categories &&
      setCategoriesState([...new Set(router.query.categories.split(","))]);
    console.log(categoriesState);
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, [tagsState, categoriesState]);

  const handlePageClick = (event) => {
    const page = event.selected ? event.selected + 1 : 1;
    // push user to new page and check if tags and categories is none put & else put ? in url
    router.query.page
      ? router.push(
          `${UrlHandler(
            router.asPath,
            `page=${router.query.page}`,
            `page=${page}`
          )}`
        )
      : router.push(
          `${router.asPath}${
            router.query.tags__in || router.query.categories ? "&" : "?"
          }${`page=${page}`}`
        );
  };
  const tagHandler = (event) => {
    if (event.target.checked) {
      // push selected filter to tagsState
      tagsState.push(event.target.value);
      // setTagsState(prevstate => [...prevstate , event.target.value]);
      // router the user to new filters
      router.query.tags__in
        ? router.query.page
          ? router.push(
              UrlHandlerWithPage(
                router.asPath,
                `${
                  router.query.tags__in || router.query.categories ? "&" : "?"
                }page=${router.query.page}`,
                `tags__in=${router.query.tags__in}`,
                `tags__in=${tagsState}`
              )
            )
          : router.push(
              UrlHandler(
                router.asPath,
                `tags__in=${router.query.tags__in}`,
                `tags__in=${tagsState}`
              )
            )
        : router.query.page
        ? router.push(
            removePage(
              router.asPath,
              `${
                router.query.tags__in || router.query.categories ? "&" : "?"
              }page=${router.query.page}`,
              `${router.query.categories ? "&" : "?"}tags__in=${tagsState}`
            )
          )
        : router.push(
            `${router.asPath}${
              router.query.categories ? "&" : "?"
            }${`tags__in=${tagsState}`}`
          );
    } else {
      // send tags query and selected filter id to tagArrayHandler for make array and set it in setTagsState
      setTagsState(tagArrayHandler(router.query.tags__in, event.target.value));
      // check if tags is ziro remove te query from url
      tagArrayHandler(router.query.tags__in, event.target.value).length
        ? // send query tags and event selected value to tagArrayHandler for split it and make new array to delete it from url
          router.replace(
            `${tagArrayUrlHandler(
              router.query.tags__in,
              `${
                router.query.tags__in || router.query.categories ? "&" : "?"
              }page=${router.query.page}`,
              router.asPath,
              event.target.value
            )}`
          )
        : // remove te query text from url
          router.replace(
            emptyTagFilter(
              router.asPath,
              `${
                router.query.tags__in || router.query.categories ? "&" : "?"
              }page=${router.query.page}`,
              `${router.query.categories ? "&" : "?"}tags__in=${
                event.target.value
              }`
            )
          );
    }
  };

  const filterCategoryHandler = (event) => {
    if (event.target.checked) {
      // push selected filter to tagsState
      categoriesState.push(event.target.value);
      // setTagsState(prevstate => [...prevstate , event.target.value]);
      // router the user to new filters
      router.query.categories
        ? router.query.page
          ? router.push(
              UrlHandlerWithPage(
                router.asPath,
                `${
                  router.query.tags__in || router.query.categories ? "&" : "?"
                }page=${router.query.page}`,
                `categories=${router.query.categories}`,
                `categories=${categoriesState}`
              )
            )
          : router.push(
              UrlHandler(
                router.asPath,
                `categories=${router.query.categories}`,
                `categories=${categoriesState}`
              )
            )
        : router.query.page
        ? router.push(
            removePage(
              router.asPath,
              `${
                router.query.tags__in || router.query.categories ? "&" : "?"
              }page=${router.query.page}`,
              `${
                router.query.tags__in ? "&" : "?"
              }categories=${categoriesState}`
            )
          )
        : router.push(
            `${router.asPath}${
              router.query.tags__in ? "&" : "?"
            }${`categories=${categoriesState}`}`
          );
    } else {
      // send tags query and selected filter id to categoriesArrayHandler for make array and set it in setTagsState
      setCategoriesState(
        categoriesArrayHandler(router.query.categories, event.target.value)
      );
      // check if tags is ziro remove te query from url
      categoriesArrayHandler(router.query.categories, event.target.value).length
        ? // send query tags and event selected value to categoriesArrayHandler for split it and make new array to delete it from url
          router.replace(
            `${categoriesArrayUrlHandler(
              router.query.categories,
              `${
                router.query.tags__in || router.query.categories ? "&" : "?"
              }page=${router.query.page}`,
              router.asPath,
              event.target.value
            )}`
          )
        : // remove te query text from url
          router.replace(
            emptyCategoryFilter(
              router.asPath,
              `${
                router.query.tags__in || router.query.categories ? "&" : "?"
              }page=${router.query.page}`,
              `${router.query.tags__in ? "&" : "?"}categories=${
                event.target.value
              }`
            )
          );
    }
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
          {tags.map((tag) => (
            <li key={tag.id}>
              <label className={styles.Filtercontainer}>
                {tag.name}
                <input
                  value={tag.id}
                  type="checkbox"
                  onClick={tagHandler}
                  checked={
                    tagsState.indexOf(tag.id.toString()) >= 0 ? true : false
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
          {categories.map((category) => (
            <li key={category.id}>
              <label className={styles.Filtercontainer}>
                {category.name}
                <input
                  value={category.id}
                  type="checkbox"
                  onClick={filterCategoryHandler}
                  checked={
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
          <DropdownButton
            className={styles.dropdownBtn}
            id="dropdown-basic-button"
            title="نوع ماشین"
            dir="rtl"
            variant="Secondary"
          >
            <Dropdown.Item className={styles.dropdownItem} href="#/action-1">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "all" && styles.activeDropdowm
                } `}
              >
                دنا
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-2">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "engin" && styles.activeDropdowm
                } `}
              >
                پژو
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                رانا
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                سمند
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                پراید
              </li>
            </Dropdown.Item>
          </DropdownButton>
          {/* //////////////////// */}
          <DropdownButton
            className={styles.dropdownBtn}
            id="dropdown-basic-button"
            title="نوع قطعه"
            dir="rtl"
            variant="Secondary"
          >
            <Dropdown.Item className={styles.dropdownItem} href="#/action-1">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "all" && styles.activeDropdowm
                } `}
              >
                قطعات برقی
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-2">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "engin" && styles.activeDropdowm
                } `}
              >
                روغن موتور
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                قطعات موتوری
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                بدنه
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                لوازم نگهداری
              </li>
            </Dropdown.Item>
          </DropdownButton>
        </section>
      </section>
      <section className={styles.mainContainer}>
        <section className={styles.main}>
          {load
            ? products.results.map((item) => (
                <section key={item.id} className={styles.card}>
                  <Link href={`/product/name=${item.slug}?id=${item.id}`} passHref>
                    <div>
                      <section className={styles.headImage}>
                        <img
                          className={styles.offertImage}
                          src="/assets/images/offerHead.svg"
                          alt="offer"
                        />
                      </section>
                      <section className={styles.image}>
                        <img
                          className={styles.productImage}
                          src="/assets/images/product.jpg"
                          alt="products"
                        />
                      </section>
                      <section className={styles.title}>
                        <h1 className={styles.titleText}>{item.name}</h1>
                        <p className={styles.seller}>
                          <i
                            style={{ color: "#18b4d1" }}
                            className="fas fa-store"
                          ></i>{" "}
                          {item.manufacturer_company}
                        </p>
                      </section>
                      <section
                        className={
                          item.discountPercent
                            ? styles.price
                            : styles.priceNoDiscount
                        }
                      >
                        <h4 className={styles.mainPrice}>
                          {item.discount_percent
                            ? item.price_after_discount
                            : item.price}{" "}
                          تومان
                        </h4>
                        {item.discount_percent ? (
                          <p className={styles.discountPercent}>
                            {item.discount_percent}
                          </p>
                        ) : (
                          ""
                        )}
                      </section>
                      {item.discount_percent ? (
                        <p className={styles.priceBeforeDiscount}>۱۵,۵۰۰,۰۰۰</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                </section>
              ))
            : data.map((item, index) => (
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
