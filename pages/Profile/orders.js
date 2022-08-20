import React from 'react'
import axios from "axios";
import cookie from "cookie";
import Head from "next/head";


//import components
import Layout from '../../components/Layout/Layout'
import Orders from '../../components/profile/Orders'
import { BaseLink } from "../../components/BaseLink/BaseLink";



export default function index ({userOrders}) {
  return (
    <Layout profile={true}>
       <Head>
        <title>لیست سفارشات</title>
      </Head>
        <Orders userOrders={userOrders} />
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
  const { token } = cookie.parse(req.headers.cookie || "");
  var isValid = false;
  if (token) {
    await axios
      .get(`${BaseLink}/set_user`, {
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
    const userOrders = await axios.get(`${BaseLink}/profile/orders/`, {
      headers: {
        Authorization: "Token " + token,
      },
    });
    return {
      props: { userOrders: userOrders.data },
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
