import React, { Component } from 'react'
import logo from '../../assets/login-icon.svg'
import './styles.scss'
import { Form, Input, Button } from 'reactstrap'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
        <h4>Sign Up</h4>
        <Form className="register-form">
          <Input
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
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
            Sign Up
          </Button>
        </Form>
      </div>
    )
  }
}

export default SignUp
