import React, { useState } from 'react'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import styles from "./NavbarComponent.module.css"
import {Nav,Navbar,Container,Offcanvas,Button } from "react-bootstrap"
import Link from 'next/link';
import { Fragment } from 'react'; // import Fragment from React
import DropDown from '../dropDown/DropDown';

const NavbarComponent = () => {

    const [dropDownclass , setDropDownclass] = useState(false);


    const dropdownHandler = () =>{
        setDropDownclass(true)
    }
    const dropdownHandlerRemove = () =>{
        setDropDownclass(false)
    }


    const [name , setName] = useState("محصولات");
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        </Head>
        <div className={styles.mobile}>
           <Navbar id="mNavbar" bg="light" expand={false} className={styles.Navbar}>
                <Container fluid className={styles.containerFluid}>
                    <Navbar.Brand href="#" className={styles.textLogo}><img src="/assets/images/navbarlogo.png" alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.navbarBtnToggle} />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton className={styles.navbarTop}>
                    </Offcanvas.Header>
                    {/* <Offcanvas.Header  className={styles.responsiveLogo}>
                        
                    </Offcanvas.Header> */}
                   
                    <hr className={styles.navHr} />
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link className={styles.mobileNavbarItems} href="#home"><i class="fas fa-home"></i> خانه </Nav.Link>
                        <Nav.Link className={styles.mobileNavbarItems} href="#link"><i class="fas fa-car"></i> درباره ما</Nav.Link>
                        <Nav.Link className={styles.mobileNavbarItems} href="#link"><i class="fas fa-hands-helping"></i> درخواست مشاوره</Nav.Link>
                        <Nav.Link className={styles.mobileNavbarItems} href="#link"><i class="fas fa-phone"></i> تماس با ما</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    <h4 className={styles.powerby}> Powerd By Farhan Ahmadi </h4>
                    </Navbar.Offcanvas>
                </Container>
                <section className={styles.mobileNavbarBottom}>
                            <section className={styles.mobileSearchBar}>
                                <input type="text" placeholder="جستجو" />
                                <Button className={styles.mobileSearchBtn} variant="danger"><i class="fas fa-search"></i></Button> 
                            </section>
                            <section className={styles.mobileUserBtn}>
                             <a><i class="fas fa-users"></i></a>
                             <section className={styles.line}></section>
                             <a><i class="fas fa-shopping-bag"></i></a>
                             </section>
                </section>
            </Navbar>
        </div>
        <div id="computer" className={styles.computer}>
            <nav className={styles.mainNav}>
                    <section className={styles.topNav}>
                        <section className={styles.rightTopNav}>
                            <section className={styles.logo}>
                                <img src="/assets/images/navbarlogo.png" alt="Logo" />
                            </section>
                            <section className={styles.searchBar}>
                                <input type="text" placeholder="جستجو" />
                                <Button className={styles.searchBtn} variant="danger"><i class="fas fa-search"></i></Button> 
                            </section>
                        </section>
                        <section className={styles.leftTopNav}>
                             <Button className={styles.loginBtn} variant="outline-danger"><i class="fas fa-users"></i> ورود / ثبت نام</Button>{' '}
                             <section className={styles.line}></section>
                             <Button className={styles.shppingBtn} variant="warning"><i class="fas fa-shopping-bag"></i></Button>{' '}
                        </section>
                    </section>
                    <section className={styles.bottomNav}>
                        <ul className={styles.navbarUl}>
                        <li><Link href="/" ><a><i class="fas fa-home"></i> خانه </a></Link></li>
                        <li><Link href="/Articles"><a><i class="fas fa-archive"></i> آرشیو مطالب </a></Link></li> 
                        <li id="shoppingBtn" onMouseEnter={dropdownHandler} onMouseLeave={dropdownHandlerRemove} ><Link href="/Articles"><a><i class="fas fa-shopping-cart"></i> محصولات</a></Link></li>
                        <li><a href="#"><i class="fas fa-stopwatch"></i> رزرو وقت</a></li> 
                        <li><a href="#"><i class="fas fa-hands-helping"></i> مشاوره </a></li> 
                        <li><Link href="/JoinUs"><a><i class="fas fa-plus-circle"></i> ثبت نام در باشگاه </a></Link> </li>
                        </ul>
                    </section>
                    <section onMouseEnter={dropdownHandler} onMouseLeave={dropdownHandlerRemove} className={dropDownclass ? styles.dropdownBlock : styles.dropdownNone }>
                        <DropDown />
                    </section>
            </nav>
        </div>
        </>
    )
}

export default NavbarComponent
