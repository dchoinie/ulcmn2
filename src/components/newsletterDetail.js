import React from "react"

const newsletterDetail = ({ newsletter }) => {
  return (
    <div className="container my-12">
      <div className="flex flex-col justify-center has-text-centered">
        <h2 className="text-xl font-bold">{newsletter.issueNumber}</h2>
        <h4>{newsletter.date}</h4>
      </div>
      <div className="py-12">
        <iframe
          src={newsletter.newsletter.file.url}
          frameborder={0}
          style={{ width: "100%", height: "100vh" }}
        ></iframe>
      </div>
    </div>
  )
}

export default newsletterDetail
