import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../components/pageTitle"

export default () => {
  const data = useStaticQuery(graphql`
    {
      luther404: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <PageTitle title="This Page Does Not Exist" />
      <div className="container my-6">
        <Img fluid={data.luther404.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}
