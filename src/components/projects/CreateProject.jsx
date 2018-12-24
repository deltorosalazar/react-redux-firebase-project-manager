import React, { Component } from 'react'
import './styles.scss'
import { Form, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

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
    this.props.createProject(this.state)
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

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateProject)
