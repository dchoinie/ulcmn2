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
            ...GatsbyImageSharpFluid
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
  const backgroundImageStack = [
    data.exterior.childImageSharp.fluid,
    `linear-gradient(to bottom left, rgba(58, 28, 113, 0.9), rgba(215, 109, 119, 0.9), rgba(255, 175, 123, 0.9))`,
  ].reverse()
  return (
    <BackgroundImage
      fluid={backgroundImageStack}
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
