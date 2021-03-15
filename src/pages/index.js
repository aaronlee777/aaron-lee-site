import * as React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="DUTY" />
    <div className="py-6 px-6">
      <h3 className="text-gray-800">Hello, I'm Aaron.</h3>
      <p className='text-gray-700'>
        I'm currently a Senior Product Designer at at{" "}
        <a className="" href="www.pagerduty.com">PagerDuty</a>
      </p>
    </div>
  </div>
)

export default IndexPage
