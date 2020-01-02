import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Newsletters from "../components/newsletters"

export default () => {
  return (
    <Layout>
      <PageTitle title="Newsletters" />
      <Newsletters />
    </Layout>
  )
}
