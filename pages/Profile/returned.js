import React from 'react'
import axios from "axios";
import cookie from "cookie";

//import components
import Layout from '../../components/Layout/Layout'
import Returned from '../../components/profile/Returned'
import { BaseLink } from '../../components/BaseLink/BaseLink';



export default function index () {
  return (
    <Layout profile={true}>
        <Returned />
    </Layout>
  )
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