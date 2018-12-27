import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to a Gatsby website powered by Jira!</h1>
    <p>This is a static website that is built from data pulled from Jira.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
