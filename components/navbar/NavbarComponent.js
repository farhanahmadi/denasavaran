import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

//?import components
import NavbarCartHover from "./navbarCartHover";
import { cartContext } from "../context/CartContextProvider";


//? import icons
import { HiChevronUp } from "react-icons/hi/index";
import { IoHomeOutline } from "react-icons/io5/index";
import { MdOutlineArticle } from "react-icons/md/index";
import { RiShoppingBasket2Line } from "react-icons/ri/index";
import { AiOutlineUsergroupAdd } from "react-icons/ai/index";
import { BiUser } from "react-icons/bi/index";

//?import styles
import styles from "./NavbarComponent.module.css";

//?import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container } from "react-bootstrap";

const NavbarComponent = ({ categoriesList }) => {
  const router = useRouter();
  const [dropDownclass, setDropDownclass] = useState(false);
  const [load, setLoad] = useState(false);
  const [active, setActive] = useState(false);
  
  const { state, dispatch } = useContext(cartContext);


  const dropdownHandler = () => {
    setDropDownclass(true);
  };
  const dropdownHandlerRemove = () => {
    setDropDownclass(false);
  };

  const [name, setName] = useState("محصولات");
  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.fixedNav}>
          <a href="#Home">
            <span
              style={
                router.pathname == "/"
                  ? { display: "block" }
                  : { display: "none" }
              }
              className={styles.arrow}
            >
              <HiChevronUp color="black" className={`icon ${styles.icons}`} />
            </span>
          </a>
          <ul className={styles.navbarList}>
            <li onClick={() => setActive("home")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "home" ? styles.active : styles.notActive
                  }
                >
                  <IoHomeOutline className={`icon ${styles.icons}`} /> خانه
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("content")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "content" ? styles.active : styles.notActive
                  }
                >
                  <MdOutlineArticle className={`icon ${styles.icons}`} /> آرشیو
                  مطالب
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("shop")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "shop" ? styles.active : styles.notActive
                  }
                >
                  <RiShoppingBasket2Line className={`icon ${styles.icons}`} />
                  فروشگاه
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("club")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "club" ? styles.active : styles.notActive
                  }
                >
                  <AiOutlineUsergroupAdd className={`icon ${styles.icons}`} />
                  عضویت در باشگاه
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <Navbar
          id="mNavbar"
          bg="light"
          expand={false}
          className={styles.Navbar}
        >
          <Container fluid className={styles.containerFluid}>
            <Navbar.Brand id="Home" href="#" className={styles.textLogo}>
              <Image
                src="/assets/images/navbarlogo.png"
                alt="Logo"
                width="268"
                height="40"
              />
            </Navbar.Brand>
          </Container>
          <section className={styles.mobileNavbarBottom}>
            <section className={styles.mobileSearchBar}>
              <input type="text" placeholder="جستجو" />
              <a
                name="searchBtn"
                className={styles.mobileSearchBtn}
                variant="danger"
              >
                <i className="fas fa-search"></i>
              </a>
            </section>
            <section className={styles.mobileUserBtn}>
              <a>
                <i className="fas fa-users"></i>
              </a>
              <section className={styles.line}></section>
              <a>
                <i className="fas fa-shopping-bag"></i>
              </a>
            </section>
          </section>
        </Navbar>
      </div>
      <div id="computer" className={styles.computer}>
        <nav className={styles.mainNav}>
          <section className={styles.topNav}>
            <section className={styles.rightTopNav}>
              <section className={styles.logo}>
                <Image
                  src="/assets/images/navbarlogo.png"
                  alt="Logo"
                  width="300"
                  height="44"
                />
              </section>
              <section className={styles.searchBar}>
                <input type="text" placeholder="جستجو" />
                <a className={styles.searchBtn} variant="danger">
                  <i className="fas fa-search" style={{ color: "#fff" }}></i>
                </a>
              </section>
            </section>
            <section className={styles.leftTopNav}>
              <Link href={"/auth/login/"}>
                <span style={{ width: "30px", margin: "0px 2%" }}>
                  <BiUser className={`icon ${styles.icons}`} />
                </span>
              </Link>
              <section className={styles.line}></section>
              <span className={styles.shppingBtn} variant="warning">
                <RiShoppingBasket2Line className={`icon ${styles.icons}`} />
                <section className={styles.cartHeader}>
                  <NavbarCartHover />
                </section>
                {/* {localStorage.getItem("userCartItems") (
                )} */}
              </span>
            </section>
          </section>
          <section className={styles.bottomNav}>
            <hr className={styles.Hrline} />
            <ul className={styles.navbarUl}>
              <li>
                <Link href="/">
                  <a>خانه</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>آرشیو مطالب</a>
                </Link>
              </li>
              <li
                id="shoppingBtn"
                onMouseEnter={dropdownHandler}
                onMouseLeave={dropdownHandlerRemove}
              >
                <Link href="/products/">
                  <a>فروشگاه</a>
                </Link>
              </li>
              <li>
                <Link href="/Join_Us">
                  <a>ثبت نام در باشگاه</a>
                </Link>{" "}
              </li>
            </ul>
          </section>
          {/* <section
            onMouseEnter={dropdownHandler}
            onMouseLeave={dropdownHandlerRemove}
            className={
              dropDownclass ? styles.dropdownBlock : styles.dropdownNone
            }
          >
            <DropDown categoriesList={categoriesList} />
          </section> */}
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
