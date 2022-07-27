import React from "react";

//?import icons
import { IoMdClose } from "react-icons/io/index";
import { FaSortAmountDown } from "react-icons/fa/index";
import { HiChevronUp } from "react-icons/hi/index";

//! import styles
import styles from "./filter.module.css";

const Filter = ({ tags, filterHandler }) => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h4>فیلتر</h4>
        <IoMdClose onClick={filterHandler} className={styles.closeIcon} />
      </section>
      <hr className={styles.line} />
      <section>
        <div className={styles.filterText}>
          <FaSortAmountDown style={{ color: "var(--red)" }} /> انتخاب بر اساس
          نوع ماشین
        </div>
        <ul className={styles.carFilter}>
          {tags.map((tag) => (
            <li key={tag.id}>
              <label className={styles.Filtercontainer}>
                {tag.name}
                <input
                  value={tag.id}
                  type="checkbox"
                  // onClick={tagHandler}
                  // checked={
                  //   tagsState.indexOf(tag.id.toString()) >= 0 ? true : false
                  // }
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))}
        </ul>
      </section>
      <button className={styles.fliterHandler} onClick={filterHandler}>
        <span>اعمال فیلتر</span> <HiChevronUp className={styles.chevronUp} />
      </button>
    </div>
  );
};

export default Filter;
