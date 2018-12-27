module.exports = {
  siteMetadata: {
    title: 'My Gatsby Jira Integrated Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-jira",
      options: {
        host: "timetopretend.atlassian.net",
        epic_field_id: "customfield_10009",
      },
    }]
}
