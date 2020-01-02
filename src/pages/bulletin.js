import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Bulletins from "../components/bulletins"

export default () => {
  return (
    <Layout>
      <PageTitle title="Bulletins" />
      <Bulletins />
    </Layout>
  )
}
