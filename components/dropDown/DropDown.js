import React from "react";

//import styles
import styles from "./dropdown.module.css";

const DropDown = ({categoriesList}) => {
  const dropdown = [
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
    {
      name: "قطعات موتوری",
      href: "#",
      subItems: [
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
        { name: "سرسلندر", href: "#" },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ul className={styles.dropdownUl}>
          {categoriesList[0].map((item , index) => (
            <li key={index}>
              <section className={styles.ListItem}>
                <h5>{item.name}</h5>
                <ul>
                  {item.children.map((data , index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
