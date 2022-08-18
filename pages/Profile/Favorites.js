import React from "react";
import axios from "axios";
import cookie from "cookie";
import Head from "next/head";


//import components
import Layout from "../../components/Layout/Layout";
import Favorites from "../../components/profile/Favorites";
import { BaseLink } from "../../components/BaseLink/BaseLink";

export default function index({ userFavorites }) {
  return (
    <Layout profile={true}>
       <Head>
        <title>لیست علاقه مندی ها</title>
      </Head>
      <Favorites userFavorites={userFavorites} />
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
    const userFavorites = await axios.get(`${BaseLink}/marks/`, {
      headers: {
        Authorization: "Token " + token,
      },
    });
    return {
      props: { userFavorites: userFavorites.data },
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
