import React, { Component } from 'react'
import './styles.scss'
import { Form, Input, Button } from 'reactstrap'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
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
        <h4>Create New Project</h4>
        <Form className="create-new-project-form">
          <Input
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <Input
            type="textarea"
            name="content"
            placeholder="Content"
            onChange={this.handleChange}
          />
          <Button
            color="primary"
            className="mt-4"
            block
            onClick={this.handleSubmit}
          >
            Create
          </Button>
        </Form>
      </div>
    )
  }
}

export default CreateProject
