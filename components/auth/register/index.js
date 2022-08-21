import React, { useState } from "react";
import Link from "next/link";

//* import modules
import { useFormik } from "formik";
import * as Yup from "yup";

//* import components
import TextInputs from "../TextInputs";

//import styles
import styles from "./register.module.css";
import { useAuth, useAuthActions } from "../../context/AuthContextProvider";

const Register = () => {
  const userDispatch = useAuthActions();

  const initialValues = {
    email: "",
    password1: "",
    password2: "",
  };

  const onSubmit = (values) => {
    userDispatch({ type: "SIGNUP", payload: values });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("ایمیل خود را وارد کنید")
      .email("ایمیل وارد شده صحیح نمیباشد"),
    password1: Yup.string()
      .required("رمز خود را وارد کنید")
      .min(6, "رمز وارد شده باید بیشتر از 6 کاراکتر باشد"),
      password2: Yup.string().required("تکرار رمز عبور را وارد کنید").oneOf([Yup.ref('password1'), null], 'رمز وارد شده مطابقت ندارد')
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

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
              name={"password1"}
              type={"password"}
              placeHolder={" رمز عبور را وارد کنید ..."}
              formik={formik}
            />
             <TextInputs
              label={"تکرار رمز عبور"}
              name={"password2"}
              type={"password"}
              placeHolder={" تکرار رمز عبور را وارد کنید ..."}
              formik={formik}
            />
            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submit}>
                ورود
              </button>
            </div>
          </section>
        <div style={{ textAlign: "center" , marginTop: '20px' }}>
            اکانت دارید ؟{" "}
            <Link href={`/auth/register`}>
              <a>ورود</a>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
