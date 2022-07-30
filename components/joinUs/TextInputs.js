import React from "react";
import {BsCheck} from "react-icons/bs/index"
import {VscClose} from "react-icons/vsc/index"

//?import styles
import styles from "./JoinUs.module.css"

const TextInputs = ({ label , name , type = "text" , placeHolder , formik }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{!formik.errors[name] ? <BsCheck className="icon" color="green" style={{marginLeft: '0'}} /> : formik.touched[name] &&  <VscClose className="icon" color="red" style={{marginLeft: '0'}} /> }{label}</label>
      <input
        className={`${styles.input} , ${formik.errors[name] ? styles.errorBorder : styles.successBorder}`}
        id={name}
        name={name}
        type={type}
        placeholder={placeHolder}
        {...formik.getFieldProps(name)}
      />
      <div className={styles.error}>
        {formik.errors[name] && formik.touched[name] && formik.errors[name]}
      </div>
    </div>
  );
};

export default TextInputs;
