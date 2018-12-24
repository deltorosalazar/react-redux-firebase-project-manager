import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProjectsList from '../projects/ProjectsList'
import Notifications from './Notifications'

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md="6">
            <ProjectsList />
          </Col>
          <Col sm="12" md={{ size: 5, offset: 1 }}>
            <Notifications />
          </Col>
        </Row>
      </Container>
    )
  }
}
