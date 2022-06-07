import React from 'react'

//import components
import Layout from '../../components/Layout/Layout'
import PersonalInfo from '../../components/profile/PersonalInfo'



export default function index () {
  return (
    <Layout profile={true}>
        <PersonalInfo />
    </Layout>
  )
}
