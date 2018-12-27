const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  console.log("Plugin Jira Source: Creating pages");
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
        {
          allJiraIssue {
            edges {
                node {
                    slug
                    jiraIssue {
                        id
                        key
                        jiraFields {
                            summary
                            customfield_10009
                            project {
                                name
                            }
                            issuetype {
                                name
                            }
                            status {
                                name
                            }
                        }
                    }
                }
            }
          }
        }
      `).then(result => {
      result.data.allJiraIssue.edges.map(({ node }) => {
        var template = './src/templates/task.jsx';
        createPage({
          path: node.slug,
          component: path.resolve(template),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.slug,
            key: node.jiraIssue.key,
            id: node.jiraIssue.id
          },
        });
      });
      resolve();
    });
  });
};

