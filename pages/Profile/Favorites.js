import React from 'react'

//import components
import Layout from '../../components/Layout/Layout'
import Favorites from '../../components/profile/Favorites'



export default function index () {
  return (
    <Layout profile={true}>
        <Favorites />
    </Layout>
  )
}
