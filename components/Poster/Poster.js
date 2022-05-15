import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./Poster.module.css"
import {Carousel} from "react-bootstrap"

const Poster = () => {
    return (
        <div className={styles.container}>
            <section className={styles.main}>
                <section className={styles.slider}>
                <Carousel fade >
                    <Carousel.Item className={styles.carouselImg}>
                        <img
                        className="d-block w-100"
                        src="/assets/images/slider1.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselImg}>
                        <img
                        className="d-block w-100"
                        src="/assets/images/slider2.png"
                        alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselImg}>
                        <img
                        className="d-block w-100"
                        src="/assets/images/slider3.png"
                        alt="Third slide"
                        />

                    </Carousel.Item>
                    </Carousel>
                    
                </section>

                <section className={styles.leftImg}>
                    <section className={styles.upImg}>
                        <img src="/assets/images/upimg.png" />
                    </section>
                    <section className={styles.downImg}>
                    <img src="/assets/images/downimg.png" />
                    </section>
                </section>
            </section>
            <section className={styles.clearfix}></section>
        </div>
        
    )
}

export default Poster
