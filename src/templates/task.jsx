import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ data }) {
  const { jiraIssue: task } = data.jiraIssue;
  return (
    <div className="text-dark mb-0 h3">
      {task.jiraFields.summary}
    </div>
  );
}

Task.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export const query = graphql`
  query TaskQuery($id: String!) {
    jiraIssue(id: { eq: $id }) {
        jiraIssue {
            id
            key
            renderedFields {
                description
            }
            jiraFields {
                summary
                description
            }
        }
    }
  }
`;
