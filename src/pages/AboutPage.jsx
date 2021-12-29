import React from "react"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This a React app to leave feedback for a product or dervice</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">Back To Home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
