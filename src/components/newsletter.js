import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ newsletter }) => {
  const data = useStaticQuery(graphql`
    {
      newsletter: file(relativePath: { eq: "resources/newsletter.png" }) {
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
    <Link to={`/${newsletter.slug}`} className="my-6">
      <div className="flex flex-col justify-center py-4">
        <h2 className="has-text-centered text-xl has-text-black font-bold">
          {newsletter.date}
        </h2>
        <h2 className="has-text-centered text-xl has-text-black font-bold">
          {newsletter.issueNumber}
        </h2>
      </div>
      <Img fluid={data.newsletter.childImageSharp.fluid} />
    </Link>
  )
}
