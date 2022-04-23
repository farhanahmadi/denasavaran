import React from 'react'
import styles from "./AboutUs.module.css"
const AboutUs = () => {
    return (
        <div className={styles.container}>
            <section className={styles.Images}>
               <section className={styles.emani}>
                 <img src='/assets/images/emani.jpg' />
               </section>
                <section className={styles.gataeat}>
                 <img src='/assets/images/gataeat.jpg' />
                </section>
                <section className={styles.masrafi}>
                  <img src='/assets/images/masrafi.jpg' />
                </section>
                <section className={styles.tazini}>
                  <img src='/assets/images/tazini.jpg' />
                </section>
            </section>
        </div>
    )
}

export default AboutUs
