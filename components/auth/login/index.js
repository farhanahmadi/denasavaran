import React, { useState } from "react";
import Link from "next/link";

//* import modules
import { useFormik } from "formik";
import * as Yup from "yup";

//* import components
import TextInputs from "../TextInputs";

//import styles
import styles from "./login.module.css";

//import functions
import { authValidation } from "../../function/authValidation";

import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post("http://45.159.113.83:801/api/v1/login/user/", values, {
        withCredentials: true,
      })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("ایمیل خود را وارد کنید")
      .email("ایمیل وارد شده صحیح نمیباشد"),
    password: Yup.string()
      .required("رمز خود را وارد کنید")
      .min(6, "رمز وارد شده باید بیشتر از 6 کاراکتر باشد"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState([]);
  const [data, setData] = useState({});

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    // setError(authValidation(data));
  };

  const submitHandler = (event) => {
    setSubmit(true);
    event.preventDefault();

    // setError(authValidation(data));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.container} dir="rtl">
        <div className={styles.formContainer} dir="rtl">
          <section className={styles.fromData}>
            <div className={styles.formLogo}>
              <img
                className={styles.logo}
                src={"/assets/images/navbarlogo.png"}
                alt="logo"
              />
            </div>
            <hr />
            <TextInputs
              label={"ایمیل"}
              name={"email"}
              placeHolder={"ایمیل را وارد کنید ..."}
              formik={formik}
            />
            <TextInputs
              label={"رمز عبور"}
              name={"password"}
              placeHolder={" رمز عبور را وارد کنید ..."}
              formik={formik}
            />
            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submit}>
                ورود
              </button>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
};

export default Login;
