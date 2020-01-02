import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ bulletin }) => {
  const data = useStaticQuery(graphql`
    {
      bulletin: file(relativePath: { eq: "resources/bulletin.png" }) {
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
    <Link to={`/${bulletin.slug}`} className="my-6">
      <div className="flex flex-col justify-center py-4">
        <h2 className="has-text-centered text-xl has-text-black font-bold">
          {bulletin.date}
        </h2>
        <h2 className="has-text-centered text-xl has-text-black font-bold">
          {bulletin.dayInTheChurchYear}
        </h2>
      </div>
      <Img fluid={data.bulletin.childImageSharp.fluid} />
    </Link>
  )
}
