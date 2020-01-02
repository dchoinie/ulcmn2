import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BulletinDetail from "../components/bulletinDetail"

const bulletinDetailTemplate = ({ data }) => {
  return (
    <Layout>
      <BulletinDetail bulletin={data.contentfulBulletin} />
    </Layout>
  )
}

export const bulletinDetailQuery = graphql`
  query bulletinDetailQuery($slug: String!) {
    contentfulBulletin(slug: { eq: $slug }) {
      contentful_id
      date(formatString: "MMMM DD, YYYY")
      dayInTheChurchYear
      slug
      bulletin {
        file {
          url
        }
      }
    }
  }
`

export default bulletinDetailTemplate
