import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to a Gatsby website powered by Jira!</h1>
    <p>This is a static website that is built from data pulled from Jira.</p>
    <p>To connect to your jira instance change the host in gatsby-config.js</p>
    <p>
      <h3>Gatsby starter website example</h3>
      https://github.com/matthewsommer/gatsby-starter-jira-source
    </p>
    <p>
      <h3>Gatsby source plugin used in the starter website example - open source code</h3>
      https://github.com/matthewsommer/gatsby-source-jira
    </p>
    <p>
      <h3>Gatsby source plugin NPM package</h3>
      https://www.npmjs.com/package/gatsby-source-jira
    </p>
  </div>
)

export default IndexPage
