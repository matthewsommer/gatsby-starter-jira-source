import React from 'react';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import Footer from './footer';
import { StaticQuery, graphql } from 'gatsby';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Gatsby static website powered by Jira' },
            { name: 'keywords', content: 'jira, gatsby, blog' },
          ]}
        />
        <div className="container">
          <div className="col offset-md-1">
            <div className="row">
              <Header siteTitle={data.site.siteMetadata.title} />
            </div>
            <div className="row">
              {children}
            </div>
            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )}
  />
)