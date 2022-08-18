import React from "react";
import { useRouter } from "next/router";

//*context
import { useFilter, useFilterAction } from "../context/FilterContextProvider";

//* import styles
import styles from "./filter.module.css";

//*import icons
import { HiChevronDown } from "react-icons/hi/index";

export default function SideBarFilter({
  load,
  tagsFilterSideBar,
  categoriesFilterSideBar,
  BlogsCategoris,
  blog,
  filterHandler,
}) {
  const router = useRouter();

  const { tagsState, categoriesState, blogsState } = useFilter();
  const dispatch = useFilterAction();

  const filterOnclickHandler = async (event, queryName, filterType, filter) => {
    if (event.target.checked) {
      await dispatch({
        type: "ADD_FILTER",
        filter: `${filterType}`,
        payload: event.target.value,
      });
    } else {
      await dispatch({
        type: "REMOVE_FILTER",
        filter: `${filterType}`,
        payload: event.target.value,
      });
    }
    router.query[filter] = queryName;
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

  return (
    <React.Fragment>
      <section className={load ? styles.sideBar : styles.skeletonSidebar}>
        {blog ? (
          <div>
            <br />
            <div className={styles.filterText}>
              <i
                style={{ color: "#EF233C" }}
                className="fas fa-sort-amount-down"
              ></i>{" "}
              فیلتر بر اساس نوع مقالات
            </div>
            <ul className={styles.carFilter}>
              {BlogsCategoris.map((blog) => (
                <li key={blog.id}>
                  <label className={styles.Filtercontainer}>
                    {blog.name}
                    <input
                      value={blog.id}
                      type="checkbox"
                      readOnly
                      onClick={(event) =>
                        filterOnclickHandler(
                          event,
                          blogsState,
                          "blogsState",
                          "blogs__in"
                        )
                      }
                      checked={
                        blogsState.indexOf(blog.id.toString()) >= 0
                          ? true
                          : false
                      }
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
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
                      onClick={(event) =>
                        filterOnclickHandler(
                          event,
                          tagsState,
                          "tagsState",
                          "tags__in"
                        )
                      }
                      checked={
                        tagsState.indexOf(tag.id.toString()) >= 0 ? true : false
                      }
                    />
                    <span className={styles.checkmark}></span>
                  </label>
                </li>
              ))}
            </ul>
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
                      onClick={(event) =>
                        filterOnclickHandler(
                          event,
                          categoriesState,
                          "categoriesState",
                          "categories"
                        )
                      }
                      readOnly
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
          </div>
        )}
      </section>
      <section className={styles.categoryContainer}>
        <section className={styles.dropdown}>
          <button
            onClick={() => filterHandler("tags")}
            className={styles.filter}
          >
            فیلتر{" "}
            <HiChevronDown
              style={{ stroke: "var(--lightBlack)" }}
              className="icon"
            />
          </button>
          <button
            onClick={() => filterHandler("categories")}
            className={styles.categoryDropdown}
          >
            دسته بندی{" "}
            <HiChevronDown
              style={{ stroke: "var(--lightBlack)" }}
              className="icon"
            />
          </button>
        </section>
      </section>
    </React.Fragment>
  );
}
