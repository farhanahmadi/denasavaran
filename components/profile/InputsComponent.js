import React from "react";

//import styles
import styles from "./profile.module.css";

export default function InputsComponent({className , label , type = "text" , formik , name , placeholder}) {
  return (
    <section className={styles[className]}>
      <section className={styles.labelContent}>
        <label>{label} :</label>
        <span>
          {formik.touched[name] &&
            formik.errors[name] &&
            formik.errors[name]}
        </span>
      </section>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
    </section>
  );
}
