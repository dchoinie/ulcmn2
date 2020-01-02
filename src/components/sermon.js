import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ sermon }) => {
  const data = useStaticQuery(graphql`
    {
      sermon: file(relativePath: { eq: "resources/sermon.png" }) {
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
    <Link to={`/${sermon.slug}`} className="my-6">
      <div className="flex justify-center py-4">
        <h2 className="text-xl font-bold has-text-black">
          {sermon.title} | {sermon.date}
        </h2>
      </div>
      <Img fluid={data.sermon.childImageSharp.fluid} />
    </Link>
  )
}
