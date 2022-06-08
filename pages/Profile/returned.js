import React from 'react'

//import components
import Layout from '../../components/Layout/Layout'
import Returned from '../../components/profile/Returned'



export default function index () {
  return (
    <Layout profile={true}>
        <Returned />
    </Layout>
  )
}
