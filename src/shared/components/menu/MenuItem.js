import React from 'react'
import PropTypes from 'prop-types'
import { NavItem } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'

const propTypes = {
  route: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const MenuItem = ({ route, children }) => {
  return (
    <NavItem>
        <Link to={route}>{children}</Link>
    </NavItem>
  )
}

MenuItem.propTypes = propTypes

export default MenuItem