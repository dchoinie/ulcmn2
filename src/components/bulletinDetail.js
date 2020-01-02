import React from "react"

const bulletinDetail = ({ bulletin }) => {
  return (
    <div className="container my-12">
      <div className="flex flex-col justify-center has-text-centered">
        <h2 className="text-xl font-bold">{bulletin.dayInTheChurchYear}</h2>
        <h4>{bulletin.date}</h4>
      </div>
      <div className="py-12">
        <iframe
          src={bulletin.bulletin.file.url}
          frameborder={0}
          style={{ width: "100%", height: "100vh" }}
        ></iframe>
      </div>
    </div>
  )
}

export default bulletinDetail
