import React from "react";
import axios from "axios";
import cookie from "cookie";
import Head from "next/head";

//import components
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/profile/Profile";
import { BaseLink } from "../../components/BaseLink/BaseLink";

export default function index() {
  return (
    <Layout page={"profile"}>
       <Head>
        <title>پروفایل کاربری</title>
      </Head>
      <Profile />
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const { token } = cookie.parse(req.headers.cookie || "");
  var isValid = false;
  if (token) {
    await axios
      .get(`${BaseLink}/profile/orders/`, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((data) => {
        isValid = true;
      })
      .catch((error) => {
        isValid = false;
      });
  }
  if (isValid) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
}
