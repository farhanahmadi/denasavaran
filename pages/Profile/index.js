import React from 'react'

//import components
import Layout from '../../components/Layout/Layout'
import Profile from '../../components/profile/Profile'



export default function index () {
  return (
    <Layout profile={true}>
        <Profile />
    </Layout>
  )
}
