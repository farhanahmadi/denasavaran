import React from "react";
import { useRouter } from "next/router";

//?import icons
import { IoMdClose } from "react-icons/io/index";
import { FaSortAmountDown } from "react-icons/fa/index";
import { HiChevronUp } from "react-icons/hi/index";

//*context
import { useFilter, useFilterAction } from "../context/FilterContextProvider";

//* import styles
import styles from "./filter.module.css";

const Filter = ({ filterList, filterHandler, filterStatus, blog }) => {
  const router = useRouter();

  const { tagsState, categoriesState, blogsState } = useFilter();
  const dispatch = useFilterAction();

  const filterOnclickHandlerProducts = async (event, filterStatus) => {
    if (event.target.checked) {
      await dispatch({
        type: "ADD_FILTER",
        filter: `${filterStatus === "tags" ? "tagsState" : "categoriesState"}`,
        payload: event.target.value,
      });
    } else {
      await dispatch({
        type: "REMOVE_FILTER",
        filter: `${filterStatus === "tags" ? "tagsState" : "categoriesState"}`,
        payload: event.target.value,
      });
    }
    router.query[filterStatus === "tags" ? "tags__in" : "categories"] =
      filterStatus === "tags" ? tagsState : categoriesState;
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

  const filterOnclickHandlerBlogs = async (event) => {
    if (event.target.checked) {
      await dispatch({
        type: "ADD_FILTER",
        filter: "blogsState",
        payload: event.target.value,
      });
    } else {
      await dispatch({
        type: "REMOVE_FILTER",
        filter: "blogsState",
        payload: event.target.value,
      });
    }
    router.query.blogs__in = blogsState;
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

  return (
    <div className={styles.container}>
      {console.log(blogsState)}
      <section className={styles.header}>
        <h4>فیلتر</h4>
        <IoMdClose
          onClick={() => filterHandler("")}
          className={styles.closeIcon}
        />
      </section>
      <hr className={styles.line} />
      {blog ? (
        <section>
          <div className={styles.filterText}>
            <FaSortAmountDown style={{ color: "var(--red)" }} />
            انتخاب بر اساس نوع مقالات
          </div>
          <ul className={styles.carFilter}>
            {filterList.map((item) => (
              <li key={item.id}>
                <label className={styles.Filtercontainer}>
                  {item.name}
                  <input
                    value={item.id}
                    type="checkbox"
                    onClick={(event) => filterOnclickHandlerBlogs(event)}
                    readOnly
                    checked={
                      blogsState.indexOf(item.id.toString()) >= 0 ? true : false
                    }
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section>
          <div className={styles.filterText}>
            <FaSortAmountDown style={{ color: "var(--red)" }} />
            انتخاب بر اساس نوع ماشین
          </div>
          <ul className={styles.carFilter}>
            {filterList.map((item) => (
              <li key={item.id}>
                <label className={styles.Filtercontainer}>
                  {item.name}
                  <input
                    value={item.id}
                    type="checkbox"
                    onClick={(event) =>
                      filterOnclickHandlerProducts(event, filterStatus)
                    }
                    readOnly
                    checked={
                      filterStatus === "tags"
                        ? tagsState.indexOf(item.id.toString()) >= 0
                          ? true
                          : false
                        : categoriesState.indexOf(item.id.toString()) >= 0
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
      )}
      <button
        className={styles.fliterHandler}
        onClick={() => filterHandler("")}
      >
        <span>اعمال فیلتر</span> <HiChevronUp className={styles.chevronUp} />
      </button>
    </div>
  );
};

export default Filter;
