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
    `linear-gradient(to bottom, rgba(32, 0, 44, 0.8) 5%, rgba(203, 180, 212, 0.3) 20%, rgba(0,0,0,0))`,
  ].reverse()
  return (
    <BackgroundImage
      fluid={backgroundImageStack}
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-84.28px",
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
