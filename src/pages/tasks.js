import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

export default function TasksPage({ data }) {
    const tasks = data.tasks.edges;
    return (
        <div>
            <div className="text-dark h2">Task List</div>
            {tasks.map((taskNode, i) => {
                const { slug } = taskNode.node;
                const task = taskNode.node.jiraIssue;
                return (
                    <div key={task.id}>
                        <h6 className="">
                            <Link to={`/${slug}`} className="text-dark">{task.jiraFields.summary}</Link>
                        </h6>
                    </div>
                );
            })}
        </div>
    );
}

TasksPage.propTypes = {
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const query = graphql`
    query TasksQuery {
      tasks: allJiraIssue {
            edges {
                node {
                    slug
                    jiraIssue {
                        id
                        jiraFields {
                            summary
                            status {
                                name
                            }
                            project {
                                name
                            }
                            issuetype {
                                name
                            }
                            components {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
  `;