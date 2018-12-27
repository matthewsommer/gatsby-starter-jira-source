import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="">
    <h1><Link to="/"> {siteTitle} </Link></h1>
    <Link to="/tasks/">List of all tasks</Link>
  </div>
)

export default Header
