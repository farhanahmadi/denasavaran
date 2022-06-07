import React from 'react'

//import components
import Layout from '../../components/Layout/Layout'
import Orders from '../../components/profile/Orders'



export default function index () {
  return (
    <Layout profile={true}>
        <Orders />
    </Layout>
  )
}
