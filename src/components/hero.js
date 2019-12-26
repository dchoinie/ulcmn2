import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      exterior: file(relativePath: { eq: "exterior.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            src
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.exterior.childImageSharp.fluid}
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-68.28px",
      }}
    >
      <div
        className="flex flex-col justify-center"
        style={{
          height: "100%",
        }}
      >
        <h2
          className="text-6xl has-text-white self-center font-bold"
          style={{ textShadow: "0px 2px 10px black" }}
        >
          {data.site.siteMetadata.title}
        </h2>
        <h4
          className="self-center has-text-white text-2xl"
          style={{ textShadow: "0px 2px 10px black" }}
        >
          {data.site.siteMetadata.description}
        </h4>
      </div>
    </BackgroundImage>
  )
}
