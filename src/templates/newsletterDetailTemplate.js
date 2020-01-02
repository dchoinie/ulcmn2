import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import NewsletterDetail from "../components/newsletterDetail"

const newsletterDetailTemplate = ({ data }) => {
  return (
    <Layout>
      <NewsletterDetail newsletter={data.contentfulNewsletter} />
    </Layout>
  )
}

export const newsletterDetailQuery = graphql`
  query newsletterDetailQuery($slug: String!) {
    contentfulNewsletter(slug: { eq: $slug }) {
      contentful_id
      date(formatString: "MMMM DD, YYYY")
      slug
      issueNumber
      newsletter {
        file {
          url
        }
      }
    }
  }
`

export default newsletterDetailTemplate
