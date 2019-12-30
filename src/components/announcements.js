import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"

const AnnouncementsCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      worship: contentfulAnnouncement(title: { eq: "Worship With Us" }) {
        id
        image {
          fluid(quality: 100) {
            src
            tracedSVG
            srcWebp
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          title
        }
      }
      bibleStudy: contentfulAnnouncement(
        title: { eq: "Bible Study (Against Heavenly Prophets)" }
      ) {
        id
        image {
          fluid(quality: 100) {
            src
            tracedSVG
            srcWebp
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          title
        }
      }
    }
  `)
  return (
    <div className="container py-32">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        transitionTime={450}
        interval={4000}
      >
        <Img fluid={data.worship.image.fluid} />
        <Img fluid={data.bibleStudy.image.fluid} />
      </Carousel>
    </div>
  )
}

export default AnnouncementsCarousel
