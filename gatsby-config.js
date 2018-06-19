module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: "gatsby-source-jira",
      options: {
        host: "jira.mattsommer.io",
        epic_field_id: "customfield_10009",
      },
    }]
}
