import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby';

const IndexPage = () => (
  <div>
    <h2>Starter Template Website</h2>
    <p>
      This is a static website that is built from data pulled from Jira.
    </p>
    <p>
      It is also a demonstration of using Jira to organize your life by tracking your to-do tasks.
    </p>
    <h2>Quickstart</h2>
    <ol>
      <li>Change host in file gatsby-config.js to your Jira instance</li>
      <li>On command line execute 'gatsby develop' to run locally</li>
      <li>To build site before deploying run 'gatsby build'</li>
    </ol>
    <h2>External Links</h2>
    <p>
      <a href='https://github.com/matthewsommer/gatsby-starter-jira-source' target="_blank"><b>Gatsby Starter Website Example</b></a>
    </p>
    <p>
      <a href='https://www.npmjs.com/package/gatsby-source-jira' target="_blank"><b>NPM Package - Gatsby Source Jira</b></a>
    </p>
    <p>
      <a href='https://github.com/matthewsommer/gatsby-source-jira' target="_blank"><b>Source Code for Gatsby Source Jira NPM Package</b></a>
    </p>
  </div>
)

export default IndexPage
