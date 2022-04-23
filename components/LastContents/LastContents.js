import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'  
import 'swiper/swiper.min.css'
import { Navigation, Pagination } from 'swiper';
import {Card , Button} from "react-bootstrap"
import React from "react";


import styles from "./LastContents.module.css";

import SwiperCore from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  
export default function LastContents() {
  
    return (
      <div className={styles.container}>
        <div className={styles.lg}>
            <section className={styles.sliderHeader}>
              <h3>آخــریــن مــحــصــولــات</h3>
            </section>
            <div className={styles.sliderContainer}>
            <section className={styles.slider}>
              <Swiper slidesPerView={4} spaceBetween={10} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={true} pagination={{
                  "clickable": true
                }} navigation={true} className={styles.mySwiper}>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/emani.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/gataeat.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/tazini.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/masrafi.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/emani.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/masrafi.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                  
                  </Swiper>
             </section>
            </div>
        </div>

        <div className={styles.md}>
            <section className={styles.sliderHeader}>
              <h3>آخــریــن مــحــصــولــات</h3>
            </section>
            <div className={styles.sliderContainer}>
            <section className={styles.slider}>
              <Swiper slidesPerView={3} spaceBetween={10} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={true} pagination={{
                  "clickable": true
                }} navigation={true} className={styles.mySwiper}>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/emani.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/gataeat.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/tazini.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/masrafi.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/emani.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/masrafi.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                  
                  </Swiper>
             </section>
            </div>
        </div>


        <div className={styles.sm}>
            <section className={styles.sliderHeader}>
              <h3>آخــریــن مــحــصــولــات</h3>
            </section>
            <div className={styles.sliderContainer}>
            <section className={styles.slider}>
              <Swiper slidesPerView={1} spaceBetween={10} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={true} pagination={{
                  "clickable": true
                }} navigation={true} className={styles.mySwiper}>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/emani.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/gataeat.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/tazini.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/masrafi.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/emani.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src='/assets/images/masrafi.jpg' />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card></SwiperSlide>
                  
                  </Swiper>
             </section>
            </div>
        </div>
       
      
      </div>
      )
}