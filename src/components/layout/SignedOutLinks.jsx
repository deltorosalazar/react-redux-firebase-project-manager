import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { NavItem, NavLink } from 'reactstrap'
import './styles.scss'

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavItem>
        <NavLink>
          <Link to="/">Sign Up</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <Link to="/">Login</Link>
        </NavLink>
      </NavItem>
    </React.Fragment>
  )
}

export default SignedOutLinks
