import React, { useState } from "react";
import Link from "next/link";

//* import modules
import { useFormik } from "formik";
import * as Yup from "yup";


import axios from "axios";
import { BaseLink } from "../../BaseLink/BaseLink";
import toast from "react-hot-toast";

//* import components
import TextInputs from "../TextInputs";

//*import styles
import styles from "./login.module.css";
import { useAuth, useAuthActions } from "../../context/AuthContextProvider";


const Login = () => {
  const userDispatch = useAuthActions();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    // userDispatch({ type: "SIGNIN", payload: values });
    axios
    .post(`${BaseLink}/login/user/`, values)
    .then(({ data }) => {
      toast.success("با موفقیت وارد شدید");
      axios.post("/api/auth", { token: data.token });
      // dispatch({
      //   type: "SIGNIN_SUCCESS",
      //   payload: data.user_data,
      //   token: data.token,
      // });
      // Router.back();
    })
    .catch((error) => {
      if (error.response) {
        // dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" });
        toast.error("error");
      }
    });
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
              type={"password"}
              placeHolder={" رمز عبور را وارد کنید ..."}
              formik={formik}
            />
            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submit}>
                ورود
              </button>
            </div>
          </section>
          <div style={{ textAlign: "center" , marginTop: '20px' }}>
            اکانت ندارید ؟{" "}
            <Link href={`/auth/register`}>
              <a>ثبت نام</a>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
