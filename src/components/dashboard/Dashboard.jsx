import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProjectsList from '../projects/ProjectsList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { projects } = this.props

    return (
      <Container>
        <Row>
          <Col sm="12" md="6">
            <ProjectsList projects={projects} />
          </Col>
          <Col sm="12" md={{ size: 5, offset: 1 }}>
            <Notifications />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)
