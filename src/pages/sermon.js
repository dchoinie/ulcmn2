import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Sermons from "../components/sermons"

export default () => {
  return (
    <Layout>
      <PageTitle title="Sermon" />
      <Sermons />
    </Layout>
  )
}
