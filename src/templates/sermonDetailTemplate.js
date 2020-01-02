import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SermonDetail from "../components/sermonDetail"

const sermonDetailTemplate = ({ data }) => {
  return (
    <Layout>
      <SermonDetail sermon={data.contentfulSermon} />
    </Layout>
  )
}

export const sermonDetailQuery = graphql`
  query sermonDetailQuery($slug: String!) {
    contentfulSermon(slug: { eq: $slug }) {
      author
      contentful_id
      date(formatString: "MMMM DD, YYYY")
      dayInTheChurchYear
      scripture
      title
      sermon {
        file {
          url
        }
      }
      slug
    }
  }
`

export default sermonDetailTemplate
