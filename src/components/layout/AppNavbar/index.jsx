import React, { Component } from 'react'
import AppNavbarView from './AppNavbarView'

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return <AppNavbarView isOpen={this.state.isOpen} toggle={this.toggle} />
  }
}

export default AppNavbar
