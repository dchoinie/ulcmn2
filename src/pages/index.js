import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Announcements from "../components/announcements"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Announcements />
  </Layout>
)

export default IndexPage
