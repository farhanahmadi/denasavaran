import React from 'react'
import Head from "next/head";
//import components
import Layout from '../../components/Layout/Layout'
import Cart from '../../components/Cart/Cart'



export default function index () {
  return (
    <Layout>
       <Head>
        <title>سبد خرید</title>
      </Head>
        <Cart />
    </Layout>
  )
}
