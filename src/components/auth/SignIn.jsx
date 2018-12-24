import React, { Component } from 'react'
import logo from '../../assets/login-icon.svg'
import './styles.scss'
import { Form, Input, Button } from 'reactstrap'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="text-center">
        <img className="mb-4" src={logo} alt="" width="72" height="72" />
        <h4>Sign In</h4>
        <Form className="login-form">
          <Input
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button
            color="primary"
            className="mt-4"
            block
            onClick={this.handleSubmit}
          >
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

export default SignIn
