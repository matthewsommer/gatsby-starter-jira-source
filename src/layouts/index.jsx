import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import Footer from '../components/footer';
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Gatsby static website powered by Jira' },
        { name: 'keywords', content: 'jira, gatsby, blog' },
      ]}
    />
    <div className="container">
      <div className="row">
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div className="row">
        {children()}
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
