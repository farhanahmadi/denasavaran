import React from 'react'
import Head from "next/head";

//import components
import Layout from '../../../components/Layout/Layout'
import Register from "../../../components/auth/register/index"



export default function index () {
  return (
    <Layout>
       <Head>
        <title>صفحه قبت نام</title>
        <meta charset="UTF-8" />
        <meta name="description" content="صفحه قبت نام وب سایت دناسواران ارومیه" />
      </Head>
        <Register />
    </Layout>
  )
}
