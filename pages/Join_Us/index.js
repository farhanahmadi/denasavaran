import React from 'react'
import Head from "next/head";

//import components
import Layout from '../../components/Layout/Layout'
import JoinUs from '../../components/joinUs/JoinUs'



export default function index () {
  return (
    <Layout>
       <Head>
        <title>عضویت در باشگاه دناسواران</title>
        <meta charset="UTF-8" />
        <meta name="description" content="صفحه عضویت در باشگاه دناسواران ارومیه" />
      </Head>
        <JoinUs />
    </Layout>
  )
}
