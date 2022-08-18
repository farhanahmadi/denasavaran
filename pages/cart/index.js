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
        <meta charset="UTF-8" />
      </Head>
        <Cart />
    </Layout>
  )
}
