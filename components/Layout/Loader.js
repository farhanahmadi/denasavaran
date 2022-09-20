import React from "react";

//* import styles
import styles from "./loader.module.css";

//* import loader
import Lottie from "lottie-react";
import CarLoader from "../../public/assets/lottieFile/72049-red-car.json";

export default function Loader({ animation }) {
  return (
    <div className={styles.main}>
      <section className={animation ? styles.loader : undefined}>
        <Lottie animationData={CarLoader} height="100%" width="100%" />;
      </section>
    </div>
  );
}
