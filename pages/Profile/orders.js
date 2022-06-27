import React from 'react'
import axios from 'axios';


//import components
import Layout from '../../components/Layout/Layout'
import Orders from '../../components/profile/Orders'
import { BaseLink } from "../../components/BaseLink/BaseLink";



export default function index ({userOrders}) {
  return (
    <Layout profile={true}>
        <Orders userOrders={userOrders} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const userOrders = await axios.get(`${BaseLink}/profile/orders/`, {
    headers: {
      Authorization: "Token " + "1a43ce13cdd644d49671d1a0bcae55cde07c4d50",
    },
  });
  return {
    props: { userOrders: userOrders.data },
  };
}