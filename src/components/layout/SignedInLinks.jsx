import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { NavItem, NavLink, Button } from 'reactstrap'
import './styles.scss'

const SignedInLinks = () => {
  return (
    <React.Fragment>
      <NavItem>
        <NavLink>
          <Link to="/">New Project</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <Link to="/">Log Out</Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink>
          <Button color="primary" className="user-icon">
            MD
          </Button>
        </NavLink>
      </NavItem>
    </React.Fragment>
  )
}

export default SignedInLinks
