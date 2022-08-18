import React from 'react'
import Head from "next/head";

//import components
import Layout from '../../../components/Layout/Layout'
import Login from "../../../components/auth/login/index"



export default function index () {
  return (
    <Layout>
       <Head>
        <title>صفحه ورود</title>
        <meta charset="UTF-8" />
        <meta name="description" content="صفحه ورود وب سایت دناسواران ارومیه" />
      </Head>
        <Login />
    </Layout>
  )
}
