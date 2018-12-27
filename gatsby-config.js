module.exports = {
  siteMetadata: {
    title: 'Welcome to a Gatsby website powered by Jira!',
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
