import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to a Gatsby website powered by Jira!</h1>
    <p>This is a static website that is built from data pulled from Jira.</p>
    <p>To connect to your jira instance change the host in gatsby-config.js</p>
    <p>
      Gatsby starter website example
      https://github.com/matthewsommer/gatsby-starter-jira-source

      Gatsby source plugin used in the starter website example - open source code
      https://github.com/matthewsommer/gatsby-source-jira

      Gatsby source plugin NPM package
      https://www.npmjs.com/package/gatsby-source-jira
    </p>
    <Link to="/tasks/">List of all tasks</Link>
  </div>
)

export default IndexPage
